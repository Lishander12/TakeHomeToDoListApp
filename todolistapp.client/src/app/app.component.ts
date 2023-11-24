import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { TodolistService, TodoItem } from 'src/services/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // Dichiarazione delle variabili di stato
  toDoListItems: TodoItem[] = [];
  newTaskTitle: string = '';
  newTaskguid: string = '';
  newTaskContent: string = '';
  newTaskDate: Date = new Date();
  taskForm: FormGroup;
  editForm: FormGroup;
  isEditableMap: { [key: string]: boolean } = {};
  selectedItemId: string = '';

  constructor(private todolistService: TodolistService, private fb: FormBuilder) {
    // Inizializzazione dei FormGroup per la creazione e la modifica
    this.taskForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      contents: ['', Validators.required],
      createdAt: ['']
    });

    this.editForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      contents: [''],
    });
  }

  ngOnInit() {
    // Chiamato all'inizio per ottenere gli elementi To-Do
    this.getToDoItems();
  }

  getToDoItems() {
    this.todolistService.getToDoListItems().subscribe({
      next: (result) => {
        this.toDoListItems = result;
      },
      error: (error) => {
        console.error(error);
  
        // Se c'è un errore di connessione, imposta useDatabase su false per utilizzare il mock
        this.todolistService.useDatabase = false;
  
        // Richiama getToDoListItems per ottenere i dati dal mock
        this.todolistService.getToDoListItems().subscribe({
          next: (mockResult) => {
            this.toDoListItems = mockResult;
          },
          error: (mockError) => {
            console.error(mockError);
          }
        });
      }
    });
  }
  



  addToDoItem(newItem: TodoItem) {
    // Aggiunge un nuovo elemento To-Do
    this.todolistService.addTodolistItem(newItem).subscribe({
      next: (result) => {
        console.log('Nuovo elemento aggiunto:', result);
        this.getToDoItems(); // Aggiorna la lista dopo l'aggiunta
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getFieldControl(fieldName: string): AbstractControl | null {
    // Restituisce il controllo di un campo specificato dal FormGroup
    return this.taskForm.get(fieldName);
  }

  addTask() {
    // Aggiunge un nuovo task alla lista
    if (this.taskForm.invalid) {
      return;
    }

    const newTask: TodoItem = {
      id: this.taskForm.value.id || this.uuidv4(),
      title: this.taskForm.value.title,
      contents: this.taskForm.value.contents,
      createdAt: this.taskForm.value.createdAt || new Date()
    };

    this.addToDoItem(newTask);
    this.taskForm.reset();
  }

  getItemById(itemId: string) {
    // Ottiene un elemento To-Do specificato per ID
    this.todolistService.getTodolistItemById(itemId).subscribe({
      next: (result) => {
        console.log('Elemento ottenuto per ID:', result);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateItem(updatedItem: TodoItem) {
    // Aggiorna un elemento To-Do
    if (this.editForm.invalid) {
      console.log('Edit form is invalid');
      return;
    }

    this.todolistService.updateTodolistItem(updatedItem).subscribe({
      next: (result) => {
        console.log('Elemento aggiornato:', result);
        this.getToDoItems(); // Aggiorna la lista dopo l'aggiornamento
      },
      error: (error) => {
        console.error('Error in updateItem:', error);
      }
    });
  }

  deleteItem(itemId: string) {
    // Cancella o annulla la modifica di un elemento To-Do
    if (this.isEditable(itemId)) {
      this.cancelEdit(itemId);
      return;
    }

    this.todolistService.deleteTodolistItem(itemId).subscribe({
      next: () => {
        console.log('Elemento eliminato con successo.');
        this.getToDoItems(); // Aggiorna la lista dopo l'eliminazione
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  uuidv4(): string {
    // Genera un UUID v4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  toggleEdit(itemId: string) {
    // Abilita o disabilita la modalità di modifica per un elemento To-Do
    console.log('Toggle edit called for item:', itemId);
    this.isEditableMap[itemId] = !this.isEditableMap[itemId];

    if (!this.isEditableMap[itemId]) {
      this.saveChanges(itemId);
    } else {
      const selectedItem = this.toDoListItems.find(item => item.id === itemId);
      if (selectedItem) {
        this.editForm.setValue({
          id: selectedItem.id,
          title: selectedItem.title,
          contents: selectedItem.contents,
        });
      }
    }
  }

  isEditable(itemId: string): boolean {
    // Verifica se un elemento To-Do è in modalità di modifica
    return this.isEditableMap[itemId] || false;
  }

  saveChanges(itemId: string) {
    // Salva le modifiche apportate a un elemento To-Do
    console.log('saveChanges edit called for item:', itemId);
    const updatedItem = this.toDoListItems.find(item => item.id === itemId);

    console.log('Form value:', this.editForm.value);
    console.log('value saved', itemId);

    if (!updatedItem) {
      console.error('Elemento non trovato per l\'ID:', itemId);
      return;
    }
    if (this.editForm.invalid) {
      console.error('Elemento non validato', itemId);
      console.log('Form value:', this.editForm.value);
    } else {
      updatedItem.title = this.editForm.value.title;
      updatedItem.contents = this.editForm.value.contents;
      console.log("sto per chiamare upateItem per l'id", itemId)
      this.updateItem(updatedItem);
      console.log("upateItem a", updatedItem)
      this.isEditableMap[itemId] = false;

      this.editForm.reset();
    }
  }

  cancelEdit(itemId: string) {
    // Annulla la modalità di modifica per un elemento To-Do
    this.isEditableMap[itemId] = false;
    this.editForm.reset();
  }

  // Proprietà del componente
  title = 'todolistapp.client';
}
