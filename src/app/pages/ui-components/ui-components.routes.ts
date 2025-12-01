import { Routes } from '@angular/router';

// ui








export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        loadComponent: () => import('./badge/badge.component').then(m => m.AppBadgeComponent),
      },
      {
        path: 'chips',
        loadComponent: () => import('./chips/chips.component').then(m => m.AppChipsComponent),
      },
      {
        path: 'lists',
        loadComponent: () => import('./lists/lists.component').then(m => m.AppListsComponent),
      },
      {
        path: 'menu',
        loadComponent: () => import('./menu/menu.component').then(m => m.AppMenuComponent),
      },
      {
        path: 'tooltips',
        loadComponent: () => import('./tooltips/tooltips.component').then(m => m.AppTooltipsComponent),
      },
      {
        path: 'forms',
        loadComponent: () => import('./forms/forms.component').then(m => m.AppFormsComponent),
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(m => m.AppTablesComponent),
      },
    ],
  },
];
