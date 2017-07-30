import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LandingPageComponent } from './components/landingpage/landingpage.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
