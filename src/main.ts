import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { TaskStatusOptions } from './app/tasks/task.model';

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
export const TaskValuesToken = new InjectionToken<typeof TaskStatusOptions>('task-status-options');

bootstrapApplication(AppComponent, {
    providers: [
        {provide: TasksServiceToken, useClass: TasksService},
        {provide: TaskValuesToken, useValue: TaskStatusOptions}
    ]
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
