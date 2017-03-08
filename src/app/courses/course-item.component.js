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
var CourseItemComponent = (function () {
    function CourseItemComponent() {
    }
    CourseItemComponent.prototype.editCourse = function () {
        console.log('edit');
    };
    CourseItemComponent.prototype.deleteCourse = function () {
        console.log('delete');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseItemComponent.prototype, "course", void 0);
    CourseItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-item',
            templateUrl: 'course-item.component.html',
            styles: ["\n    i {\n      color: #2b3e50;\n    }\n    .description {\n      font-size: large;\n      margin: 20px 0;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseItemComponent);
    return CourseItemComponent;
}());
exports.CourseItemComponent = CourseItemComponent;
//# sourceMappingURL=course-item.component.js.map