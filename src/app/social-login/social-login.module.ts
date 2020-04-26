import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginRoutingModule } from './social-login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLoginComponent } from './social-login/social-login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule,
  NbSidebarModule, NbCardModule, NbStepperModule, NbListModule,
  NbActionsModule, NbMenuModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SocialLoginRoutingModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireModule,

    // NbListModule,
    // NbUserModule,
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbButtonModule,
    // NbActionsModule,
    // NbIconModule,
    // NbCardModule,
    // NbInputModule,
    // NbStepperModule,
    // NbMenuModule.forRoot(),
    // NbSidebarModule.forRoot(),
    // NbThemeModule.forRoot({ name: 'default' }),
  ]
})
export class SocialLoginModule { }
