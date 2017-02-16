"use strict";
var courses_list_component_1 = require("./courses/courses-list.component");
var course_details_component_1 = require("./courses/course-details/course-details.component");
var _404_component_1 = require("./error/404.component");
var course_route_activator_service_1 = require("./courses/course-details/course-route-activator.service");
exports.appRoutes = [
    { path: 'courses', component: courses_list_component_1.CoursesListComponent },
    { path: 'courses/new', component: course_details_component_1.CourseDetailsComponent },
    { path: 'courses/:id', component: course_details_component_1.CourseDetailsComponent, canActivate: [course_route_activator_service_1.CourseRouteActivatorService] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];
// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
//# sourceMappingURL=routes.js.map