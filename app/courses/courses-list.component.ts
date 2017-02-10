import {Component} from "@angular/core";

@Component({
    selector: 'courses-list',
    templateUrl: 'app/courses/courses-list.component.html'
})
export class CoursesListComponent {

    courses = [
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

    handleEventClicked(data) { // Just for test purposes
        console.log(data);
    }

}