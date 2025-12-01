import { Routes } from '@angular/router';


// pages



export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        loadComponent: () => import('./icons/icons.component').then(m => m.AppIconsComponent),
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./sample-page/sample-page.component').then(m => m.AppSamplePageComponent),
      },
    ],
  },
];
