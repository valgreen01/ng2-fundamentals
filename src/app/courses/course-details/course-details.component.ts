import {Component, OnInit} from "@angular/core";
import {CourseService} from "../shared/course.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'course-details',
  templateUrl: 'course-details.component.html'
})
export class CourseDetailsComponent implements OnInit {

  course: any;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.course = this.courseService.getCourse(+this.activatedRoute.snapshot.params['id']);
  }

  cancelCourseCreation() {
    this.router.navigate(['/courses']);
  }
}
