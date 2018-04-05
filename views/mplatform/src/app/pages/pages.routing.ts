import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from "../auth/auth.guard";

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
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
