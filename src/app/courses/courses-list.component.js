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
var core_1 = require("@angular/core");
//import {CourseService} from "./shared/course.service";
var router_1 = require("@angular/router");
var CoursesListComponent = (function () {
    function CoursesListComponent(route) {
        this.route = route;
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        //this.courses = this.courseService.getCourses(); // synchronous call
        //this.courseService.getCourses().subscribe(courses => { this.courses = courses; }); // async call, but no longer needed since it's subscribing on the "course-list-resolver.service"
        this.courses = this.route.snapshot.data['courses'];
    };
    CoursesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'courses-list',
            templateUrl: 'courses-list.component.html',
            styles: ["\n    @media (max-width:991px) {\n      .col-md-3 button {\n        margin-top: 15px;\n      }\n    }\n    \n    @media (max-width:767px) {\n      .col-md-9 .form-group + button {\n        display: block;\n        width: 100%;\n      }\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], CoursesListComponent);
    return CoursesListComponent;
}());
exports.CoursesListComponent = CoursesListComponent;
//# sourceMappingURL=courses-list.component.js.map