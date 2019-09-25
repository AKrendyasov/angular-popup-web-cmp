import { Component } from '@angular/core';

@Component({
  selector: 'angular-div-element',
  template: `<div>{{content}}</div>`
})
export class AngularDivElement {
 content: string = 'some content';
}