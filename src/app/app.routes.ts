import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
