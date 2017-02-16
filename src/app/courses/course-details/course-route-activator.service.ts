import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CourseService} from "../shared/course.service";

@Injectable()
export class CourseRouteActivatorService implements CanActivate {

  constructor(private courseService: CourseService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const courseExist = !!this.courseService.getCourse(+route.params['id']);

    if (!courseExist) {
      this.router.navigate(['/404']);
    }

    return courseExist;
  }
}
