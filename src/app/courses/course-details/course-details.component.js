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
var course_service_1 = require("../shared/course.service");
var router_1 = require("@angular/router");
var CourseDetailsComponent = (function () {
    function CourseDetailsComponent(courseService, activatedRoute, router) {
        this.courseService = courseService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isDirty = true;
    }
    CourseDetailsComponent.prototype.ngOnInit = function () {
        this.course = this.courseService.getCourse(+this.activatedRoute.snapshot.params['id']);
    };
    /**
     *  @method      cancelCourseCreation
     *  @description navigate to /courses when pressing cancel button in form
     */
    CourseDetailsComponent.prototype.cancelCourseCreation = function () {
        this.router.navigate(['/courses']);
    };
    CourseDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-details',
            templateUrl: 'course-details.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());
exports.CourseDetailsComponent = CourseDetailsComponent;
//# sourceMappingURL=course-details.component.js.map