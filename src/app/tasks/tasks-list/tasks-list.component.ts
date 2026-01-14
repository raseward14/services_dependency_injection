import { Component, signal, inject, computed } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  //tasks = [];

  private tasksService = inject(TasksService);

  tasks = computed(() => this.tasksService.tasks());

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
