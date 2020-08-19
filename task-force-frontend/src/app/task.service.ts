import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`http:18.217.160.143/todos/${task.id}`, task);
  }
  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`http:18.217.160.143/todos/${id}`);
  }

  deleteAllTasks(): Observable<any> {
    return this.http.delete('http:18.217.160.143/todos/');
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`http:18.217.160.143/todos/${id}`);
  }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://18.222.193.153:8080/todos`);
  }

  // TODO:  routine for patch
  
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>('http:18.217.160.143/todos/', task);
  }
}
