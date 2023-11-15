using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using ToDoListApp.Server.Entities;

namespace ToDoListApp.Server.DbContext
{
    public class ToDoListAppDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ToDoListAppDbContext(DbContextOptions options) : base(options)
        {
           
        }

        //TODO ADD DBSETS
    }   
}
