import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularDivElement } from './angular-div-element';

@Component({
  selector: 'app-root',
  template: `
    <angular-div-element></angular-div-element>
  `,
})
export class AppComponent {
  constructor(injector: Injector) {

        // Register the custom element with the browser.
    customElements.define('angular-div-element', createCustomElement(AngularDivElement, {injector}));
  }
}