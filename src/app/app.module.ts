// Modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
// import {AppRoutingModule} from "./app-routing.module";

// Components
import {CoursesAppComponent} from "./courses-app.component";
import {HeaderComponent} from "./header/header.component";
import {CoursesListComponent} from "./courses/courses-list.component";
import {CourseItemComponent} from "./courses/course-item.component";
import {CourseDetailsComponent} from "./courses/course-details/course-details.component";
import {Error404Component} from "./error/404.component";

// Services
import {CourseService} from "./courses/shared/course.service";
import {ToastrService} from "./common/toastr.service";
import {CourseRouteActivatorService} from "./courses/course-details/course-route-activator.service";

// Routes
import {appRoutes} from "./routes";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CoursesAppComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    Error404Component
  ],
  providers: [
    CourseService,
    ToastrService,
    CourseRouteActivatorService
  ],
  bootstrap: [CoursesAppComponent]
})
export class AppModule {
}
