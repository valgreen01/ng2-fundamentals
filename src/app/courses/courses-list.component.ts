import {Component, OnInit} from "@angular/core";
//import {CourseService} from "./shared/course.service";
import {ActivatedRoute} from "@angular/router";
//import {ToastrService} from "../common/toastr.service";

@Component({
  moduleId: module.id,
  selector: 'courses-list',
  templateUrl: 'courses-list.component.html',
  styles: [`
    @media (max-width:991px) {
      .col-md-3 button.btn-block {
        margin-top: 15px;
      }
    }
    
    @media (max-width:767px) {
      .col-md-9 .form-group + button {
        display: block;
        width: 100%;
      }
    }
  `]
})
export class CoursesListComponent implements OnInit {

  //courses: any[];
  courses: any;

  constructor(/*private courseService: CourseService, private toastr: ToastrService*/ private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.courses = this.courseService.getCourses(); // synchronous call
    //this.courseService.getCourses().subscribe(courses => { this.courses = courses; }); // async call, but no longer needed since it's subscribing on the "course-list-resolver.service"
    this.courses = this.route.snapshot.data['courses'];
  }

  // handleCourseClicked(courseName) {
  //     this.toastr.success(courseName);
  // }

}
