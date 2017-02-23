import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {ICourse} from "./course.model";
// import 'rxjs/Rx'; this will load all features

@Injectable()
export class CourseService {

  COURSES:ICourse[] = [
    {
      id: 1,
      name: '3D Modeling with JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      releasedDate: new Date('02/21/2017'),
      duration: '2h 35m',
      authors: [
        'Aldo Valgreen'
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

  getCourse(id: number): ICourse {
    return this.COURSES.find(course => course.id === id);
  }

  getCourses(): Observable<ICourse[]> { // Remove returned type "Observable<any>" later, then import rxjs/Rx package
    let subject = new Subject<ICourse[]>();

    setTimeout(() => {
      subject.next(this.COURSES);
      subject.complete();
    }, 100);

    return subject;

    //return this.COURSES;
  }

}
