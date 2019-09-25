import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularDivComponent } from './angular-div-component';


@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [AppComponent,AngularDivComponent],
  bootstrap: [AppComponent],
  entryComponents: [AngularDivComponent],
})
export class AppModule {
}