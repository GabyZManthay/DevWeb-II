import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchText: string): any[] {

    if (!products) return [];
    if (!searchText) return products;

    searchText = searchText.toLowerCase();

    return products.filter(product =>
      product.title.toLowerCase().includes(searchText)
    );
  }
}