import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:'', loadChildren: () => import('./tutorials/tutorial.module').then(m => m.TutorialModule) },
  { path:'social-login', loadChildren: () => import('./social-login/social-login.module').then(n => n.SocialLoginModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
