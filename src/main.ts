import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { TaskStatusOptions } from './app/tasks/task.model';

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
export const TasksValueToken = new InjectionToken('task-status-options');

bootstrapApplication(AppComponent, {
    providers: [
        {provide: TasksServiceToken, useClass: TasksService},
        {provide: TasksValueToken, useValue: TaskStatusOptions}
    ]
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
