// Modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

// Barrels
import {
  CoursesListComponent,
  CourseItemComponent,
  CourseDetailsComponent,
  CourseService,
  CourseRouteActivatorService,
  CourseListResolverService,
  DurationPipe
} from "./courses/index";

// Components
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {Error404Component} from "./error/404.component";

// Services (and third party libs as services)
import {TOASTR_TOKEN, Toastr} from "./common/toastr.service";
import {AuthService} from "./user/auth.service";

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    Error404Component,
    DurationPipe
  ],
  providers: [
    CourseService,
    {
      provide: TOASTR_TOKEN, // OpaqueToken Object format used for Services injected into components and other services
      useValue: toastr
    },
    CourseRouteActivatorService, // This is a shorthand way to REGISTER/ADD a Class as a Provider (to the DI system of NG2)
    // ... so the below example would be the longhand way to do the same, registering/adding a Class as a Provider with the "provide" and "useClass" properties
    // {
    //   provide: CourseRouteActivatorService, // TOKEN
    //   useClass: CourseRouteActivatorService // Object of the CLASS
    // },
    CourseListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateCourse', // String format used for Routing
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CourseDetailsComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this Course, do you really want to cancel?');
  }
  return true;
}
