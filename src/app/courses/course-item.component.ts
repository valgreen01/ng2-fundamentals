import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'course-item',
    templateUrl: 'course-item.component.html'
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