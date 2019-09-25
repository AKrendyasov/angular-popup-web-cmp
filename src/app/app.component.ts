import { Component, Injector } from '@angular/core';
import { AngularDivComponent } from './angular-div-component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {

}

//					,items		: {
			//			xtype		: 'component'
			//			,flex		: 1
			//			,bind		: {
			//				html		: '<app-uba-behavior-list fxFill groupId="{originalGroupId}"></app-uba-behavior-list>'
			//			}
			//		}

      	// чтобы работало в webComponents
	//@Input() set groupid(groupId: string) {
	//	this.groupId = groupId;
	//}