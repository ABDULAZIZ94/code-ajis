import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login/social-login.component';


const routes: Routes = [
  { path:'social-login', component:SocialLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLoginRoutingModule { }
