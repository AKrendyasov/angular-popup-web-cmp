import { Component } from '@angular/core';

@Component({
  selector: 'angular-div-element',
  template: `<app-servers></app-servers>`
})
export class AngularDivComponent {
 content: string = 'some content';
}