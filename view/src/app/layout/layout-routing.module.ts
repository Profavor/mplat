import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
          { path: 'login', loadChildren: '../auth/auth.module#AuthModule' },
          { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule', canActivate: [AuthGuard] },
          { path: '**', loadChildren: './blank-page/blank-page.module#BlankPageModule', canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
