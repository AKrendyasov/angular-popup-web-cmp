import { Input, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-div-element',
  template: `<div>{{content}}</div>`,
  encapsulation: ViewEncapsulation.Native
})
export class AngularDivElement {
  @Input() content = 'some content';

}