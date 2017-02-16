// Modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

// Components
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {CoursesListComponent} from "./courses/courses-list.component";
import {CourseItemComponent} from "./courses/course-item.component";
import {CourseDetailsComponent} from "./courses/course-details/course-details.component";
import {Error404Component} from "./error/404.component";

// Services
import {CourseService} from "./courses/shared/course.service";
import {ToastrService} from "./common/toastr.service";
import {CourseRouteActivatorService} from "./courses/course-details/course-route-activator.service";
import {CourseListResolverService} from "./courses/course-list-resolver.service";

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
  if(component.isDirty) {
    return window.confirm('You have not saved this Course, do you really want to cancel?');
  }
  return true;
}
