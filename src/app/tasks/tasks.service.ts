import { inject, Injectable, signal } from '@angular/core';

import type { Task, TaskStatus } from './task.model';
import { LoggingService } from './logging.service';

// @Injectable({ 
//     providedIn: 'root', 
// })

export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);

    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string; description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(36).substring(2, 9),
            status: 'OPEN'
        }
        this.tasks.update(oldTasks => [...oldTasks, newTask]);
        this.loggingService.log(`New task added with title: ${taskData.title}`);
    };

    updateTaskStatus(taskData: { taskId: string, newStatus: TaskStatus }) {
        // const updatedTasks = this.tasks().map((task: Task) =>
        //     task.id === taskData.taskId ? { ...task, status: taskData.newStatus } : task
        // );

        // this.tasks.set(updatedTasks);

        this.tasks.update((oldTasks) => 
            oldTasks.map((task) =>
                task.id === taskData.taskId ? { ...task, status: taskData.newStatus } : task
            )
        );
        this.loggingService.log(`Task status changed to: ${taskData.newStatus}`);
    };
};