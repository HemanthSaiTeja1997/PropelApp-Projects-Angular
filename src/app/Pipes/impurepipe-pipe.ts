import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipe'
})
export class ImpurepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return new Date().toLocaleTimeString();
  }

}
