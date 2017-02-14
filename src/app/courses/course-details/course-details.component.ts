import {Component, OnInit} from "@angular/core";
import {CourseService} from "../shared/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'course-details',
    templateUrl: 'course-details.component.html'
})
export class CourseDetailsComponent implements OnInit {

    course: any;

    constructor(private courseService: CourseService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.course = this.courseService.getCourse(+this.route.snapshot.params['id']);
    }

}