import {Component, Input} from "@angular/core";
import {ICourse} from "./shared/course.model";

@Component({
  moduleId: module.id,
  selector: 'course-item',
  templateUrl: 'course-item.component.html'
})
export class CourseItemComponent {

  @Input() course: ICourse;

  editCourse() {
    console.log('edit');
  }

  deleteCourse() {
    console.log('delete');
  }

}
