import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryComponent } from './dictionary.component';
import { routing } from './dictionary.routing';
import {AdminGuard} from '../../../auth';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {SharedPipesModule} from '../../../common/pipes/shared-pipes.module';
import { jqxTreeGridComponent  } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedPipesModule
  ],
  declarations: [
    DictionaryComponent, jqxTreeGridComponent
  ],
  providers: [
    AdminGuard, AuthenticationService
  ]
})
export class DictionaryModule {}
