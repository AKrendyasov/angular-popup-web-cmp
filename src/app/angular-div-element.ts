import { Input, Component } from '@angular/core';

@Component({
  selector: 'angular-div-element',
  template: `<div>{{content}}</div>`
})
export class AngularDivElement {
  @Input() content = 'some content';

}