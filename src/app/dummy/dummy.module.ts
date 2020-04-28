import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { NbCardModule, NbThemeModule } from '@nebular/theme';
import { CodesDirective } from '../directives/codes.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DummyComponent,
    CodesDirective
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    DummyRoutingModule
  ]
})
export class DummyModule { }
