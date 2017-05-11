import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule, // 1
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
