import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { WriteComponent } from './write/write.component';


@NgModule({
  declarations: [WriteComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
