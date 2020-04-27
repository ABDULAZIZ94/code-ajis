import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginRoutingModule } from './social-login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLoginComponent } from './social-login/social-login.component';

import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule,
  NbSidebarModule, NbCardModule, NbStepperModule, NbListModule,
  NbActionsModule, NbMenuModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { ProfileComponent } from './profile/profile.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SocialLoginService } from '../services/social-login.service';

@NgModule({
  declarations: [
    SocialLoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    
    // NbListModule,
    // NbUserModule,
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbButtonModule,
    // NbActionsModule,
    // NbIconModule,
    NbCardModule,
    // NbInputModule,
    // NbStepperModule,
    // NbMenuModule.forRoot(),
    // NbSidebarModule.forRoot(),
    // NbThemeModule.forRoot({ name: 'default' }),

    // AngularFireAuthGuardModule,
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    
    SocialLoginRoutingModule,

  ],
  providers:[
    SocialLoginService
  ]
})
export class SocialLoginModule { }
