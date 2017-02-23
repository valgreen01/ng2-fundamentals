import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {CourseService} from "./shared/course.service";

@Injectable()
export class CourseListResolverService implements Resolve<any> {

  constructor(private courseService: CourseService) {
  }

  /**
   *  @method      resolve
   *  @description get list of courses through courseService
   */
  resolve() {
    return this.courseService.getCourses().map(courses => courses);
  }

}
