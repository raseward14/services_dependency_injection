import { Injectable, signal } from '@angular/core';

import type { Task } from './task.model';

@Injectable({ providedIn: 'root' })

export class TasksService {
    taskData = signal<Task[]>([]);

    addTask(newTask: Task) {
        this.taskData.update(tasks => [...tasks, newTask]);
    };
};