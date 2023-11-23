import { TestBed } from '@angular/core/testing';

import { TodolistService } from './to-do-list.service';

describe('ToDoListService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
