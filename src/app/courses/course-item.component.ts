import {Component, Input} from "@angular/core";
import {ICourse} from "./shared/course.model";

@Component({
  moduleId: module.id,
  selector: 'course-item',
  templateUrl: 'course-item.component.html',
  styles: [`
    i {
      color: #2b3e50;
    }
    .description {
      font-size: large;
      margin: 20px 0;
    }
  `]
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
