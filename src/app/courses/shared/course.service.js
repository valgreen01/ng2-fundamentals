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
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
var CourseService = (function () {
    function CourseService() {
        this.COURSES = [
            {
                id: 1,
                name: '3D Modeling with JS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                releasedDate: new Date('02/21/2017'),
                duration: '2h 35m',
                authors: [
                    'Aldo Valgreen',
                    'Victoria Galitskaya'
                ]
            },
            {
                id: 2,
                name: 'Vue JS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisicing elit',
                releasedDate: new Date('01/18/2017'),
                duration: null,
                authors: [
                    'Henry White'
                ]
            },
            {
                id: 3,
                name: 'Sketch',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elit amet.',
                releasedDate: new Date('03/14/2017'),
                duration: '1h 20m',
                authors: [
                    'Siobhan Lu'
                ]
            }
        ];
    }
    /**
     * @method      getCourse
     * @description get single course by id
     * @param       id
     * @returns     {undefined|ICourse}
     */
    CourseService.prototype.getCourse = function (id) {
        return this.COURSES.find(function (course) { return course.id === id; });
    };
    /**
     * @method      getCourses
     * @description get list of courses
     * @returns     {Subject<ICourse[]>}
     */
    CourseService.prototype.getCourses = function () {
        var _this = this;
        var subject = new Subject_1.Subject();
        setTimeout(function () {
            subject.next(_this.COURSES);
            subject.complete();
        }, 100);
        return subject;
    };
    /**
     * @method      updateCourse
     * @description update an existing course
     * @param       course
     */
    CourseService.prototype.updateCourse = function (course) {
        course.id = 999;
        //course = [];
        this.COURSES.push(course);
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map