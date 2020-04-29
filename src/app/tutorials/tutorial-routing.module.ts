import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { WriteComponent } from './write/write.component';
import {
  AngularFireAuthGuard, hasCustomClaim,
  redirectLoggedInTo, redirectUnauthorizedTo
} from '@angular/fire/auth-guard'; //dont use auto import

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['social-login']);

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'tutorial', component: TutorialComponent
  },
  { 
    path: 'write', component: WriteComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
