"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// import {AppRoutingModule} from "./app-routing.module";
// Components
var courses_app_component_1 = require("./courses-app.component");
var header_component_1 = require("./header/header.component");
var courses_list_component_1 = require("./courses/courses-list.component");
var course_item_component_1 = require("./courses/course-item.component");
var course_details_component_1 = require("./courses/course-details/course-details.component");
var _404_component_1 = require("./error/404.component");
// Services
var course_service_1 = require("./courses/shared/course.service");
var toastr_service_1 = require("./common/toastr.service");
var course_route_activator_service_1 = require("./courses/course-details/course-route-activator.service");
// Routes
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                courses_app_component_1.CoursesAppComponent,
                header_component_1.HeaderComponent,
                courses_list_component_1.CoursesListComponent,
                course_item_component_1.CourseItemComponent,
                course_details_component_1.CourseDetailsComponent,
                _404_component_1.Error404Component
            ],
            providers: [
                course_service_1.CourseService,
                toastr_service_1.ToastrService,
                course_route_activator_service_1.CourseRouteActivatorService
            ],
            bootstrap: [courses_app_component_1.CoursesAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map