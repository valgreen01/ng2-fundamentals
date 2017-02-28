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
var app_routing_module_1 = require("./app-routing.module");
// Barrels
var index_1 = require("./courses/index");
// Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var _404_component_1 = require("./error/404.component");
// Services (third party libs)
var toastr_service_1 = require("./common/toastr.service");
var auth_service_1 = require("./user/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                index_1.CoursesListComponent,
                index_1.CourseItemComponent,
                index_1.CourseDetailsComponent,
                _404_component_1.Error404Component
            ],
            providers: [
                index_1.CourseService,
                toastr_service_1.ToastrService,
                index_1.CourseRouteActivatorService,
                index_1.CourseListResolverService,
                auth_service_1.AuthService,
                {
                    provide: 'canDeactivateCreateCourse',
                    useValue: checkDirtyState
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this Course, do you really want to cancel?');
    }
    return true;
}
//# sourceMappingURL=app.module.js.map