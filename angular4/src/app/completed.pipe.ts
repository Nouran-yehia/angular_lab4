import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed'
})
export class CompletedPipe implements PipeTransform {

  transform(value: boolean): any {
    if(value == true)return "Yes";
    else return "No";
  }

}
