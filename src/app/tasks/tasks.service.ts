import { Injectable, signal } from '@angular/core';

import type { Task, TaskStatus } from './task.model';

@Injectable({ providedIn: 'root' })

export class TasksService {
    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string; description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(36).substring(2, 9),
            status: 'OPEN'
        }

        this.tasks.update(oldTasks => [...oldTasks, newTask]);
    };

    updateTask(taskData: { taskId: string, newStatus: TaskStatus }) {
        console.log(taskData.taskId, taskData.newStatus);
        
        const updatedTasks = this.tasks().map((task: Task) =>
            task.id === taskData.taskId ? { ...task, status: taskData.newStatus } : task
        );

        this.tasks.set(updatedTasks);
    };
};