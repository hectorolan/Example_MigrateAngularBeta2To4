import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateAdComponent } from './createad/createad.component';
import { MyAdsComponent } from './myads/myads.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';
import { BaseModule } from '../shared/base/base.module';

@NgModule({
  imports: [
    BaseModule,
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    CreateAdComponent,
    MyAdsComponent,
    UserComponent]
})
export class AdminModule { }
