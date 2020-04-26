import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login/social-login.component';
import {
  AngularFireAuthGuard, hasCustomClaim,
  redirectLoggedInTo, redirectUnauthorizedTo
} from '@angular/fire/auth-guard'; //dont use auto import


const redirectLoggedInToWriter = () => redirectLoggedInTo(['write']);

const routes: Routes = [
  {
    path: 'social-login', component: SocialLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToWriter } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLoginRoutingModule { }
