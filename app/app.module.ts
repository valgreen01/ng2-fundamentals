import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CoursesAppComponent} from "./courses-app.component";
import {CoursesListComponent} from "./courses/courses-list.component";
import {CourseItemComponent} from "./courses/course-item.component";
import {HeaderComponent} from "./header/header.component";
import {CourseService} from "./courses/shared/course.service";
import {ToastrService} from "./common/toastr.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CoursesAppComponent,
        CoursesListComponent,
        CourseItemComponent,
        HeaderComponent
    ],
    providers: [CourseService, ToastrService],
    bootstrap: [CoursesAppComponent]
})
export class AppModule {}