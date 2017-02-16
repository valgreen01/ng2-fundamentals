import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'error-404',
  template: `
    <h1 class="errorMessage">404</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top: 150px;
      font-size: 170px;
      text-align: center;
    }
  `]
})
export class Error404Component {

  constructor() {

  }

}
