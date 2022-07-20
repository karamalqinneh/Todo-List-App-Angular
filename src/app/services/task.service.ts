import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:3000/tasks';
  allTasks = [
    {
      id: 1,
      name: 'Task1',
      state: true,
    },
    {
      id: 2,
      name: 'Task2',
      state: false,
    },
    {
      id: 3,
      name: 'Task3',
      state: false,
    },
  ];
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    let response = this.http.get<Task[]>(this.apiUrl);
    return response;
  }

  deleteTask(event: number) {
    const url = `${this.apiUrl}/${event}`;
    return this.http.delete(url);
  }
}
