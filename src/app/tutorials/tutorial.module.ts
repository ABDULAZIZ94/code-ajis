import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { WriteComponent } from './write/write.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule,
  NbSidebarModule, NbCardModule, NbStepperModule, NbListModule,
  NbActionsModule, NbMenuModule, NbUserModule, NbBadgeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

//fontawosome module
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { SafehtmlPipe } from '../pipes/safehtml.pipe';
//pipes

@NgModule({
  declarations: [
    SafehtmlPipe,
    WriteComponent, 
    HomeComponent,
    TutorialComponent,
  ],
  imports: [
    FontAwesomeModule,
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
    NbBadgeModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    TutorialRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    SafehtmlPipe
  ]
})
export class TutorialModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far);
  }
}
