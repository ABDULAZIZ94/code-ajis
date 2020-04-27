import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login/social-login.component';
import {
  AngularFireAuthGuard, hasCustomClaim,
  redirectLoggedInTo, redirectUnauthorizedTo
} from '@angular/fire/auth-guard'; //dont use auto import
import { ProfileComponent } from './profile/profile.component';


const redirectLoggedInToWriter = () => redirectLoggedInTo(['write']);

const routes: Routes = [
  {
    path: 'social-login', redirectTo:'social-login-hardworking'
  },
  {
    path:'profile',component: ProfileComponent
  },
  {
    ///social-login covered by root router
    path: '', component: SocialLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToWriter }
  },
  {
    path: 'social-login-hardworking', component: SocialLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToWriter }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLoginRoutingModule { }
