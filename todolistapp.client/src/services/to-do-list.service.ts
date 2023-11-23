import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface TodoItem {
  id: string;
  title: string;
  contents: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private apiUrl = 'https://localhost:7259/api/TodoItem';
  public useDatabase = true;

  constructor(private http: HttpClient) {}

  getToDoListItems(): Observable<TodoItem[]> {
    if (this.useDatabase) {
      return this.http.get<TodoItem[]>(this.apiUrl);
    } else {
      return of([
        { id: 'mock-item-1', title: 'Mock Task 1', contents: 'Mock Task Contents 1', createdAt: new Date() },
        { id: 'mock-item-2', title: 'Mock Task 2', contents: 'Mock Task Contents 2', createdAt: new Date() },
      ]); // Ritorna un observable vuoto quando la connessione al database è disabilitata
    }
  }

  
  // Aggiunge un nuovo elemento To-Do
  addTodolistItem(newItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, newItem);
  }

  // Ottiene un elemento To-Do per ID
  getTodolistItemById(itemId: string): Observable<TodoItem> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.get<TodoItem>(url);
  }

  // Aggiorna un elemento To-Do
  updateTodolistItem(updatedItem: TodoItem): Observable<TodoItem> {
    const url = `${this.apiUrl}/${updatedItem.id}`;
    return this.http.put<TodoItem>(url, updatedItem);
  }

  // Elimina un elemento To-Do
  deleteTodolistItem(itemId: string): Observable<void> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete<void>(url);
  }
}
