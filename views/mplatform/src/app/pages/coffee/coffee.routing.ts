import { Routes, RouterModule } from '@angular/router';

import { CoffeeComponent } from './coffee.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from '../../auth/auth.guard';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CoffeeComponent
    , canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
