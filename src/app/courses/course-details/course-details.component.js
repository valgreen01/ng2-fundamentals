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
var forms_1 = require("@angular/forms");
var CourseDetailsComponent = (function () {
    // \b Word boundary. Matches a word boundary position such as whitespace, punctuation, or the start/end of the string.
    // \d Digit. Matches any digit character (0-9).
    // {2} Quantifier. Match 2 of the preceding token.
    // [ Character set. Match any character in the set.
    // . Character. Matches a "." character (char code 46).
    // ]
    function CourseDetailsComponent(courseService, activatedRoute, router) {
        this.courseService = courseService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isDirty = true;
        this.datePattern = new RegExp(/\b\d{2}[.]\d{2}[.]\d{4}\b/, 'g');
    }
    CourseDetailsComponent.prototype.ngOnInit = function () {
        this.course = this.courseService.getCourse(+this.activatedRoute.snapshot.params['id']);
        this.name = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.description = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(140)]);
        this.releasedDate = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(this.datePattern)]);
        this.duration = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.authors = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.courseForm = new forms_1.FormGroup({
            name: this.name,
            description: this.description,
            releasedDate: this.releasedDate,
            duration: this.duration,
            authors: this.authors
        });
    };
    CourseDetailsComponent.prototype.saveCourse = function (formValues) {
        //this.courseService.updateCourse(formValues);
        //this.isDirty = false;
        //this.router.navigate(['/courses']);
        console.log(formValues);
    };
    CourseDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/courses']);
    };
    CourseDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-details',
            templateUrl: 'course-details.component.html',
            styles: ["\n    em {\n      float: right;\n      color: #bd362f;\n      padding-left: 10px;\n    }\n    .error input,\n    .error select,\n    .error textarea {\n      background-color: #d67a6a;\n    }\n    .error ::-webkit-input-placeholder,\n    .error ::-moz-placeholder,\n    .error :-moz-placeholder,\n    .error :-ms-input-placeholder {\n      color: #999;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());
exports.CourseDetailsComponent = CourseDetailsComponent;
//# sourceMappingURL=course-details.component.js.map