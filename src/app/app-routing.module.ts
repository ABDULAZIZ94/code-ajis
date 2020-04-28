import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './tutorials/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { SocialLoginService } from './services/social-login.service';

//working on lazy loading
//also virtual scrolling

const routes: Routes = [
  { path:'', loadChildren: () => import('./tutorials/tutorial.module').then(m => m.TutorialModule) },
  { path:'social-login', loadChildren: () => import('./social-login/social-login.module').then(n => n.SocialLoginModule) },
  { path: 'dummy', loadChildren: () => import('./dummy/dummy.module').then(m => m.DummyModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false})
  ],
  exports: [RouterModule],
  providers:[
    SocialLoginService
  ]
})
export class AppRoutingModule { }
