import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib2Module } from "lib2";
import { Lib1Module } from "lib1";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib2Module, Lib1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
