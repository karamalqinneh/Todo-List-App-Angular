import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  inputData!: string;
  @Output() addItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.addItem.emit(this.inputData);
  }
}
