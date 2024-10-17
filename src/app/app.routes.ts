import { Routes } from '@angular/router';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';

// Lazy Loading
export const routes: Routes = [
  { path: 'homepage', redirectTo: '' },
  {
    path: '',
    loadComponent: () =>
      import('../app/shared/pages/homepage/homepage.component').then(
        (c) => c.HomepageComponent
      ),
  },
  {
    path: 'todolist',
    loadComponent: () =>
      import('../app/shared/components/todo-list/todo-list.component').then(
        (c) => c.TodoListComponent
      ),
  },
  //{path:'/login',component:LoginComponent}
];
