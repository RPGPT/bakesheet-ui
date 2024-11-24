import { Routes } from '@angular/router';
import { CakeTableComponent } from './components/cake-table/cake-table.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    ];
