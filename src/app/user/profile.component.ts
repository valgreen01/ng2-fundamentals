import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  //selector: 'user-profile', // No selector needed since the component is being consumed by Routing instead of template files
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  constructor() {
  }

}
