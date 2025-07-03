import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purepipe'
})
export class PurepipePipe implements PipeTransform {

  transform(value: any): any {
    return value*value;
  }

}
