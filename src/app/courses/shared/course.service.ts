import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
// import 'rxjs/Rx'; this will load all features

@Injectable()
export class CourseService {

  COURSES = [
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

  getCourse(id: number) {
    return this.COURSES.find(course => course.id === id);
  }

  getCourses(): Observable<any> { // Remove returned type "Observable<any>" later, then import rxjs/Rx package
    let subject = new Subject<any>();

    setTimeout(() => {
      subject.next(this.COURSES);
      subject.complete();
    }, 100);

    return subject;

    //return this.COURSES;
  }

}
