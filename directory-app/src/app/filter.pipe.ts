import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pencils: any, term: any): any {
    console.log(term);
    if (term === undefined) return pencils;
    return pencils.filter(function(pencil) {
      return pencil.color.toLowerCase().includes(term.toLowerCase());
    });
  }

}
