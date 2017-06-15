import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';
import {HotTableModule} from "ng2-handsontable";
import {AuthGuard} from "../../auth/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    HotTableModule
  ],
  declarations: [
    Dashboard
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModule {}
