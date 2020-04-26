import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from './social-login/social-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TutorialModule } from './tutorials/tutorial.module';
import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule,
  NbSidebarModule, NbCardModule, NbStepperModule, NbListModule,
  NbActionsModule, NbMenuModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialLoginModule,
    TutorialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
