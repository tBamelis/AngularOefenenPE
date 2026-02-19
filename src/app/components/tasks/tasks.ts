import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import { TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { Subscriber } from 'rxjs';




@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [CommonModule,TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit
{
  
  tasks: Task[] = [];

  constructor (private taskService: TaskService)
  {
    
  }

  ngOnInit():void
  {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks =tasks);
  }

}
