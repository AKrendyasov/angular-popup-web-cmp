import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularDivElement } from './angular-div-element';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [AppComponent,AngularDivElement],
  bootstrap: [AppComponent],
  entryComponents: [AngularDivElement],
})
export class AppModule {
}