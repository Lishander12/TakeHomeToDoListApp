using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListApp.Server.DbContext;
using ToDoListApp.Server.Entities;

namespace ToDoListApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoItemController : ControllerBase
    {
        private readonly ToDoListAppDbContext _context;

        public TodoItemController(ToDoListAppDbContext context)
        {
            _context = context;
        }

        // GET: api/TodoItem
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoItem>>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // GET: api/TodoItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoItem>> GetTodoItem(Guid id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // POST: api/TodoItem
        [HttpPost]
        public async Task<ActionResult<ToDoItem>> PostTodoItem(ToDoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.id }, todoItem);
        }

        // PUT: api/TodoItem/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(Guid id, ToDoItem todoItem)
        {
            Console.WriteLine($"Received request to update item with ID: {id}");
            if (id != todoItem.id)
            {
                return BadRequest();
            }

            _context.Entry(todoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/TodoItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(Guid id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoItemExists(Guid id)
        {
            return _context.TodoItems.Any(e => e.id == id);
        }
    }
}
