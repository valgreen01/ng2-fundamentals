import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {

    let result: string = '',
      hours: number = Math.floor(value / 60),
      minutes: number = value % 60;

    if (hours) {
      result += hours + 'h';
    }

    if (hours && minutes) {
      result += ' ';
    }

    if (minutes) {
      result += minutes + 'min';
    }

    return result;
  }

}
