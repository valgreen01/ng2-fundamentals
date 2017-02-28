import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [`
      li > a.active {
        color: chartreuse;
      }
    `]
})
export class HeaderComponent {

  logoImageUrl: string = 'app/assets/images/angular.png';

  constructor(private authService: AuthService) {
  }

}
