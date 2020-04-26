import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginRoutingModule } from './social-login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLoginComponent } from './social-login/social-login.component';

@NgModule({
  declarations: [
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SocialLoginRoutingModule
  ]
})
export class SocialLoginModule { }
