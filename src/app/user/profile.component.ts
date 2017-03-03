import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  //selector: 'user-profile', // No selector needed since the component is being consumed by Routing instead of template files
  templateUrl: 'profile.component.html',
  styles: [`
    em {
      float: right;
      color: #bd362f;
      padding-left: 10px;
    }
    .error input {
      background-color: #d67a6a;
    }
    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error :-moz-placeholder,
    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class ProfileComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['courses']);
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['courses']);
  }

}
