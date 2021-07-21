import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para que muestre el tipo de moneda
 */
@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
