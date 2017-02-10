import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'course-item',
    templateUrl: 'app/courses/course-item.component.html'
})
export class CourseItemComponent {

    @Input() course:any;

    @Output() eventClick = new EventEmitter(); // Just for test purposes

    editCourse() {
        this.eventClick.emit(this.course.name); // Just for test purposes
    }

    deleteCourse() {
        console.log('delete');
    }

}