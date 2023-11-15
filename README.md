# TODO list application - Take home assignment
This assignment asks the applicant to fork this repository, setup the development environment, edit the template solution to achieve and visualize basic CRUD functionality for an example "ToDoList" data object.

There is a very useful tutorial you can follow here : https://www.youtube.com/watch?v=eNVbiIsoEUw&ab_channel=SameerSaini (the main difference is it uses Sql Server instead of Postgresql)

## App requirements : 
- the site will be a SPA, with views dedicated to display, insert, delete, edit messages. (take inspiration from https://www.youtube.com/watch?v=MkESyVB4oUw)
- for simplicity there will be no authentication required.
- the ToDoList object is defined as :
```
{
	guid : "Id"
	string : "Title",
	string : "Message",
	datetime : "CreatedAt"
}
```
- feel free to expand or add any further funcionality.

## Technologies: 

- Visual studio 2022 / VS Code
- Angular 18
- .Net 7
- EntityFramework Core
- Postgresql
- Swagger

### Setup Guide: 
- Make sure to have Node v18.18.2, npm v9.8.1, angular/cli 15.0.5, .net 7.0 installed.

- Configure both the frontend and backend do start on startup for easier debugging

![alt text](https://i.imgur.com/vvRjfDF.png)

- a successful run should output two browsers, demonstrating mockup frontend and api call functionality

![alt text](https://i.imgur.com/i4dmtTh.png)

### Useful links 

- https://labpys.com/how-to-create-web-api-crud-in-asp-net-core-with-postgresql/
- https://learn.microsoft.com/it-it/aspnet/core/client-side/spa/angular?view=aspnetcore-7.0&tabs=visual-studio
