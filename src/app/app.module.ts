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

// Services
import {CourseService} from "./courses/shared/course.service";
import {ToastrService} from "./common/toastr.service";

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
        CourseDetailsComponent
    ],
    providers: [
        CourseService,
        ToastrService
    ],
    bootstrap: [CoursesAppComponent]
})
export class AppModule {}