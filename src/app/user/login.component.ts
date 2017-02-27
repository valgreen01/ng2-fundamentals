import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  login(formValues) {
    console.log(formValues);
  }

}
