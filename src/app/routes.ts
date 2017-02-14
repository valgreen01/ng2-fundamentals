import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CoursesListComponent} from "./courses/courses-list.component";
import {CourseDetailsComponent} from "./courses/course-details/course-details.component"

export const appRoutes: Routes = [
    {path: 'courses', component: CoursesListComponent},
    {path: 'courses/:id', component: CourseDetailsComponent},
    {path: '', redirectTo: '/courses', pathMatch: 'full'}
];

// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
// }