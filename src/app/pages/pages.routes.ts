import { Routes } from '@angular/router';


export const PagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./starter/starter.component').then(m => m.StarterComponent),
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
];
