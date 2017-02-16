import {Component, OnInit} from "@angular/core";
import {CourseService} from "./shared/course.service";
//import {ToastrService} from "../common/toastr.service";

@Component({
  moduleId: module.id,
  selector: 'courses-list',
  templateUrl: 'courses-list.component.html'
})
export class CoursesListComponent implements OnInit {

  courses: any[];

  constructor(private courseService: CourseService /*, private toastr: ToastrService*/) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  // handleCourseClicked(courseName) {
  //     this.toastr.success(courseName);
  // }

}
