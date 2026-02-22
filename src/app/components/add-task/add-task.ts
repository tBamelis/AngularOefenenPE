import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text : string ="";
  day: string ="";
  reminder: boolean = false;

  showAddTask: boolean = true;
  constructor()
  {

  }
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
