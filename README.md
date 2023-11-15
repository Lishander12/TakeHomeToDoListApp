# ToDo list web application

## Assignment 
Demonstrate your adaptation and versatility skills as a developer! 

[Fork this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template), setup the development environment, edit the template solution to realize the given requirements.

Try as much as possible to stick to the given technology stack, even if you are not familiar with it.

If you are stuck, there is a very useful tutorial you can follow here: https://www.youtube.com/watch?v=eNVbiIsoEUw&ab_channel=SameerSaini

## App requirements: 

- the site will be a SPA, with a single or multiple views to allow the user to display, insert, delete, edit messages. ( ui can look similar to https://www.youtube.com/watch?v=MkESyVB4oUw )

- for simplicity there will be no authentication required.

- persist the todolist items on a postgres database instance.

- the ToDoList object is defined as :

```
{
	guid : "Id"
	string : "Title",
	string : "Contents",
	datetime : "CreatedAt"
}
```
- feel free to expand or add any further functionality to demonstrate your creativity skills.

## Template solution technologies: 

- Visual studio 2022 / VS Code
- Angular 18
- .Net 7
- EntityFramework Core
- Postgresql

### Setup Guide: 
- Make sure to have Node v18.18.2, npm v9.8.1, angular/cli 15.0.5, .net 7.0 installed.

- Configure both the frontend and backend do start on startup for easier debugging

![alt text](https://i.imgur.com/vvRjfDF.png)

- a successful run should output two browsers, demonstrating mockup frontend and api call functionality

![alt text](https://i.imgur.com/i4dmtTh.png)

### Useful links 

- https://labpys.com/how-to-create-web-api-crud-in-asp-net-core-with-postgresql/
- https://learn.microsoft.com/it-it/aspnet/core/client-side/spa/angular?view=aspnetcore-7.0&tabs=visual-studio

## Evaluation criteria

- Completeness: did you complete the features as briefed?
- Correctness: Does the solution perform in sensible, thought-out ways?
- Maintainability: is the code written in a clean, maintainable way?

## Completing your work

After you are done, document and comment your code as much as possible, push your changes in your own repository and share the link with the reviewer.

All the best and happy coding.
