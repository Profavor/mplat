import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../common';
import {AuthenticationService} from "../auth/services/authentication.service";
import {UserService} from "../auth/services/user.service";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../auth/auth.guard";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    providers: [AuthenticationService, UserService, AuthGuard]
})
export class LayoutModule { }
