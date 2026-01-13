import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  private tasksService = inject(TasksService);

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({
      id: Math.random().toString(36).substring(2, 9),
      title: title,
      description: description,
      status: 'OPEN'
    })
    this.formEl()?.nativeElement.reset();
  }
}
