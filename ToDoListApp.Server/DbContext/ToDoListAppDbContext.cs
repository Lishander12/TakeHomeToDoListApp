using Microsoft.EntityFrameworkCore;
using ToDoListApp.Server.Entities;

namespace ToDoListApp.Server.DbContext
{
    public class ToDoListAppDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ToDoListAppDbContext(DbContextOptions<ToDoListAppDbContext> options) : base(options)
        {
        }

        public DbSet<ToDoItem> TodoItems { get; set; }

      

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

            base.OnModelCreating(modelBuilder);
        }
    }
}
