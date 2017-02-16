import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CoursesListComponent} from "./courses/courses-list.component";
import {CourseDetailsComponent} from "./courses/course-details/course-details.component"
import {Error404Component} from "./error/404.component";
import {CourseRouteActivatorService} from "./courses/course-details/course-route-activator.service";
import {CourseListResolverService} from "./courses/course-list-resolver.service";

export const appRoutes: Routes = [
  {path: 'courses', component: CoursesListComponent, resolve: {courses: CourseListResolverService}},
  {path: 'courses/new', component: CourseDetailsComponent, canDeactivate: ['canDeactivateCreateCourse']},
  {path: 'courses/:id', component: CourseDetailsComponent, canDeactivate: ['canDeactivateCreateCourse'], canActivate: [CourseRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
