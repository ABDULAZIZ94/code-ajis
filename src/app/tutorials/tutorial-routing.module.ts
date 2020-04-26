import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { WriteComponent } from './write/write.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'tutorial', component:TutorialComponent },
  { path:'write', component: WriteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
