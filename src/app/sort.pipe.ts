import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(array: any, propName: string): any {
    const sortedArray = array.sort((a, b) =>
      a[propName] > b[propName] ? 1 : -1
    );

    return sortedArray;
  }
}
