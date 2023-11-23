using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoListApp.Server.Entities
{
    [Table("todoitems")]
    public class ToDoItem
    {
            public Guid id { get; set; }
            public string title { get; set; }
            public string contents { get; set; }
            public DateTime createdat { get; set; }
        }
    }

