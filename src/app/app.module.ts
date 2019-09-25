import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { AppComponent } from './app.component';
import { AngularDivComponent } from './angular-div-component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';




@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [],
  declarations: [AppComponent,AngularDivComponent, ServersComponent, ServerComponent],
  bootstrap: [],
  entryComponents: [AngularDivComponent,AppComponent],
})
export class AppModule {
    constructor(private injector: Injector) {

        // Register the custom element with the browser.
   
  }
  //	ngDoBootstrap(app) {
		// загрузим переводы
		//this.i18nService.load().then( () => {
			// Если выбран режим сборки webComponent, то добавляем их
		//	if ( environment.webComponent ) {
		// this.createWebComponents();		
		//	} else {
		//		// Иначе руками создадим bootstrap компонент
		//		document.body.appendChild( document.createElement('app-root') );
		//		app.bootstrap(AppComponent);
		//	}
		//});
	//}

    ngDoBootstrap(app) {
    const config: NgElementConfig = {injector: this.injector};
     customElements.define('angular-div-element', createCustomElement(AngularDivComponent, config));
    }

 


}