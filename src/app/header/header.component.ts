import {Component} from "@angular/core";

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

}
