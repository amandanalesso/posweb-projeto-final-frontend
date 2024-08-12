import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = 'R$', decimalPlaces: number = 2): string {
    if (value == null || isNaN(value)) {
      return '';
    }
    return `${currencySymbol} ${value.toFixed(decimalPlaces).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
}
