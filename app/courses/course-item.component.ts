import {Component, Input} from "@angular/core";

@Component({
    selector: 'course-item',
    templateUrl: 'app/courses/course-item.component.html'
})
export class CourseItemComponent {

    @Input() course:any;

    editCourse() {
        console.log('edit');
    }

    deleteCourse() {
        console.log('delete');
    }

}