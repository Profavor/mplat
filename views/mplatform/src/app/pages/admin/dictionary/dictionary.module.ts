import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryComponent } from './dictionary.component';
import { routing } from './dictionary.routing';
import {AdminGuard} from '../../../auth';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {SharedPipesModule} from '../../../common/pipes/shared-pipes.module';
import {DictionaryService} from './dictionary.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {SuiPaginationModule} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedPipesModule,
    FormsModule,
    TranslateModule,
    SuiPaginationModule
  ],
  declarations: [
    DictionaryComponent
  ],
  providers: [
    AdminGuard, AuthenticationService, DictionaryService
  ]
})
export class DictionaryModule {}
