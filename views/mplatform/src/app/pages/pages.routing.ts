import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from '../auth/auth.guard';

export const routes: Routes = [
 {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'register',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'admin/settings/dictionary', loadChildren: './admin/dictionary/dictionary.module#DictionaryModule' },
      { path: 'coffee', loadChildren: './coffee/coffee.module#CoffeeModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
