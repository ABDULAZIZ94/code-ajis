import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { WriteComponent } from './write/write.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule,
  NbSidebarModule, NbCardModule, NbStepperModule, NbListModule,
  NbActionsModule, NbMenuModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [WriteComponent, HomeComponent],
  imports: [
    CommonModule,
    NbListModule,
    NbUserModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    TutorialRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TutorialModule { }
