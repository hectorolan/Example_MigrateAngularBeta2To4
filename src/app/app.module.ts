import { NgModule } from '@angular/core';
// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BaseModule } from './shared/base/base.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
// Declarations
import { AppComponent } from './app.component';
// Providers
import { FirebaseService } from './services/firebase.service';
import { AdService } from './services/ad.service';
import { UserService } from './services/user.service';
import { TogglenavService } from './services/togglenav.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BaseModule,
    BrowserModule,
    HttpModule,
    LoginModule,
    AdminModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [
    FirebaseService,
    AdService,
    UserService,
    TogglenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
