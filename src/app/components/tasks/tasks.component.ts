import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  toBeDeleted!: number;
  toBeEdited!: number;
  @Input() tasks!: any[];
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  faTrash = faTrash;
  constructor() {}

  ngOnInit(): void {}

  deleteTodo() {
    this.deleteTask.emit(this.toBeDeleted);
  }
  editTodo() {
    this.editTask.emit(this.toBeEdited);
  }
}
