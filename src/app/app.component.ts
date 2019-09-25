import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularDivComponent } from './angular-div-component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  constructor(injector: Injector) {

        // Register the custom element with the browser.
    customElements.define('angular-div-element', createCustomElement(AngularDivComponent, {injector}));
  }
}