import {Component, OnInit} from "@angular/core";
import {CourseService} from "../shared/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICourse} from "../shared/course.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'course-details',
  templateUrl: 'course-details.component.html',
  styles: [`
    em {
      float: right;
      color: #bd362f;
      padding-left: 10px;
    }
    .error input,
    .error select,
    .error textarea {
      background-color: #d67a6a;
    }
    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error :-moz-placeholder,
    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class CourseDetailsComponent implements OnInit {

  name: FormControl;
  description: FormControl;
  releasedDate: FormControl;
  duration: FormControl;
  authors: FormControl;

  courseForm: FormGroup;

  course: ICourse;

  isDirty: boolean = true;

  datePattern: RegExp = new RegExp(/\b\d{2}[.]\d{2}[.]\d{4}\b/, 'g');

  // \b Word boundary. Matches a word boundary position such as whitespace, punctuation, or the start/end of the string.
  // \d Digit. Matches any digit character (0-9).
  // {2} Quantifier. Match 2 of the preceding token.
  // [ Character set. Match any character in the set.
  // . Character. Matches a "." character (char code 46).
  // ]

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.course = this.courseService.getCourse(+this.activatedRoute.snapshot.params['id']);

    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(140)]);
    this.releasedDate = new FormControl('', [Validators.required, Validators.pattern(this.datePattern)]);
    this.duration = new FormControl('', [Validators.required]);
    this.authors = new FormControl('', [Validators.required]);

    this.courseForm = new FormGroup({
      name: this.name,
      description: this.description,
      releasedDate: this.releasedDate,
      duration: this.duration,
      authors: this.authors
    });
  }

  saveCourse(formValues) {
    //this.courseService.updateCourse(formValues);
    //this.isDirty = false;
    //this.router.navigate(['/courses']);
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
