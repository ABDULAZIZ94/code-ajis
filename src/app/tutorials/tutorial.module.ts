import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { WriteComponent } from './write/write.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WriteComponent, HomeComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TutorialModule { }
