import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularDivComponent } from './angular-div-component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [],
  declarations: [AppComponent,AngularDivComponent, ServersComponent, ServerComponent],
  bootstrap: [AppComponent],
  entryComponents: [AngularDivComponent],
})
export class AppModule {
}