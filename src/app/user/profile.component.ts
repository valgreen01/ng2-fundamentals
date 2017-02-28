import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  //selector: 'user-profile', // No selector needed since the component is being consumed by Routing instead of template files
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName);
    this.lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }

}
