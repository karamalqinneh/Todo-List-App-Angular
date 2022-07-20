import { Component } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.allTasks = tasks));
  }

  addTodo(event: any) {
    console.log(event, 'FROM APP');
    this.allTasks.push({
      id: this.allTasks.length,
      name: event,
      state: false,
    });
  }

  handleDeleteTask(event: any) {
    console.log(event, 'FROM APP');
    this.allTasks = this.allTasks.filter((task) => task.id !== event);
  }
}
