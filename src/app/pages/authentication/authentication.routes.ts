import { Routes } from '@angular/router';




export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./side-login/side-login.component').then(m => m.AppSideLoginComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./side-register/side-register.component').then(m => m.AppSideRegisterComponent),
      },
    ],
  },
];
