import { Routes, RouterModule }  from '@angular/router';

import { DictionaryComponent } from './dictionary.component';
import { ModuleWithProviders } from '@angular/core';
import {AdminGuard} from "../../../auth";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DictionaryComponent
    , canActivate: [AdminGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
