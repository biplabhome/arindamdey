import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileshowcaseComponent } from './profileshowcase/profileshowcase.component';
import { ProfilesummaryComponent } from './profilesummary/profilesummary.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';
import { TechskillsComponent } from './techskills/techskills.component';
import { CoderepositoriesComponent } from './coderepositories/coderepositories.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CertheaderComponent } from './certheader/certheader.component';
import { CareerobjectiveComponent } from './careerobjective/careerobjective.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileshowcaseComponent,
    ProfilesummaryComponent,
    ExperienceComponent,
    AchievementsComponent,
    EducationComponent,
    CertificationComponent,
    TechskillsComponent,
    CoderepositoriesComponent,
    AboutmeComponent,
    CertheaderComponent,
    CareerobjectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
