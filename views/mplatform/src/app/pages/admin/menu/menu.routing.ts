import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { ModuleWithProviders } from '@angular/core';
import {AdminGuard} from '../../../auth';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
    , canActivate: [AdminGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
