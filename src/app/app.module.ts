import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsPageComponent } from './components/forms-page/forms-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormsPageComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
