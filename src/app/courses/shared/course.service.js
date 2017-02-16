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
var CourseService = (function () {
    function CourseService() {
        this.COURSES = [
            {
                id: 1,
                name: '3D Modeling with JS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                releasedDate: null,
                duration: '2h 35m',
                author: 'Aldo Valgreen'
            },
            {
                id: 2,
                name: 'Vue JS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisicing elit',
                releasedDate: '18/01/2017',
                duration: null,
                author: 'Henry White'
            },
            {
                id: 3,
                name: 'Sketch',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elit amet.',
                releasedDate: '14/03/2017',
                duration: '1h 20m',
                author: null
            }
        ];
    }
    CourseService.prototype.getCourse = function (id) {
        return this.COURSES.find(function (course) { return course.id === id; });
    };
    CourseService.prototype.getCourses = function () {
        return this.COURSES;
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map