import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuLevelComponent } from './menu-level.component';
import { routing } from './menu.routing';
import {AdminGuard} from '../../../auth';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {SharedPipesModule} from '../../../common/pipes/shared-pipes.module';
import {MenuService} from './menu.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {SuiPaginationModule, SuiSelectModule} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedPipesModule,
    FormsModule,
    TranslateModule,
    SuiPaginationModule, SuiSelectModule
  ],
  declarations: [
    MenuComponent, MenuLevelComponent
  ],
  providers: [
    AdminGuard, AuthenticationService, MenuService
  ]
})
export class MenuModule {}
