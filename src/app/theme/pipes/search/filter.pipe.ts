import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm?: string): any {
    if (!searchterm){return value;}
  return value.filter(function(x){
    return x.name.toLowerCase().includes(searchterm.toLowerCase());

  });

}
}
