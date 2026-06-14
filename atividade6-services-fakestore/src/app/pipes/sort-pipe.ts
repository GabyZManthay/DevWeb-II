import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortOption: string): any[] {

    if (!products) return [];

    switch (sortOption) {

      case 'asc':
        return [...products].sort((a, b) => a.price - b.price);

      case 'desc':
        return [...products].sort((a, b) => b.price - a.price);

      default:
        return products;
    }
  }
}