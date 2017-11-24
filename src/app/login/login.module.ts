import { NgModule } from '@angular/core';
import { BaseModule } from '../shared/base/base.module';
import { LoginRoutingModule } from './login-routing.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { GetEmailDialogComponent } from './get-email-dialog/get-email-dialog.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    BaseModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    EmailVerificationComponent,
    GetEmailDialogComponent,
    SignUpComponent
  ],
  entryComponents: [
    GetEmailDialogComponent
  ],
  exports: [
    GetEmailDialogComponent
  ]
})
export class LoginModule { }
