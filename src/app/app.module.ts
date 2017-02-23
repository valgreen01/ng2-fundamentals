// Modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

// Barrels
import {
  CoursesListComponent,
  CourseItemComponent,
  CourseDetailsComponent,
  CourseService,
  CourseRouteActivatorService,
  CourseListResolverService
} from "./courses/index";

// Components
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {Error404Component} from "./error/404.component";

// Services (third party libs)
import {ToastrService} from "./common/toastr.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    Error404Component
  ],
  providers: [
    CourseService,
    ToastrService,
    CourseRouteActivatorService,
    CourseListResolverService,
    {
      provide: 'canDeactivateCreateCourse',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CourseDetailsComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this Course, do you really want to cancel?');
  }
  return true;
}
