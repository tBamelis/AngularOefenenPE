import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem
{
  faTimes = faTimes;
  @Input() task?:Task;

}
