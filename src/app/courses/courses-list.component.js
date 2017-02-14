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
var course_service_1 = require("./shared/course.service");
var toastr_service_1 = require("../common/toastr.service");
var CoursesListComponent = (function () {
    function CoursesListComponent(courseService, toastr) {
        this.courseService = courseService;
        this.toastr = toastr;
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        this.courses = this.courseService.getCourses();
    };
    CoursesListComponent.prototype.handleCourseClicked = function (courseName) {
        this.toastr.success(courseName);
    };
    CoursesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'courses-list',
            templateUrl: 'courses-list.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, toastr_service_1.ToastrService])
    ], CoursesListComponent);
    return CoursesListComponent;
}());
exports.CoursesListComponent = CoursesListComponent;
//# sourceMappingURL=courses-list.component.js.map