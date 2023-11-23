using Microsoft.EntityFrameworkCore;
using ToDoListApp.Server.DbContext;

namespace ToDoListApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);



            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<ToDoListAppDbContext>(options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            builder.Services.AddCors(options =>
            {
             options.AddPolicy("AllowAll", builder =>
              {
                 builder.AllowAnyOrigin()
                     .AllowAnyMethod()
                       .AllowAnyHeader();
              });
            });

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.MapFallbackToFile("/index.html");

            app.UseCors("AllowAll");

            app.Run();
        }
    }
}
