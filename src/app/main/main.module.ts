import { NgModule } from '@angular/core';
import { BaseModule } from '../shared/base/base.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { SectionComponent } from './section/section.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { AdsComponent } from './ads/ads.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MainRoutingModule,
    BaseModule
  ],
  declarations: [
    MainComponent,
    ConsolesComponent,
    SectionComponent,
    ShowroomComponent,
    AdsComponent
  ]
})
export class MainModule {
}
