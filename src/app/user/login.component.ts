import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  // selector: 'login-form', // No selector needed since the component is being consumed by Routing instead of template files
  templateUrl: 'login.component.html',
  styles: [`
    em {
      float: right;
      color: #bd362f;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['courses']);
  }

  cancel() {
    this.router.navigate(['courses']);
  }

}
