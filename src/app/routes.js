"use strict";
var courses_list_component_1 = require("./courses/courses-list.component");
var course_details_component_1 = require("./courses/course-details/course-details.component");
exports.appRoutes = [
    { path: 'courses', component: courses_list_component_1.CoursesListComponent },
    { path: 'courses/:id', component: course_details_component_1.CourseDetailsComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];
// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
// } 
//# sourceMappingURL=routes.js.map