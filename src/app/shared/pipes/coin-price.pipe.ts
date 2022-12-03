import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coinPrice'
})
export class CoinPricePipe implements PipeTransform {

  constructor() {

  }

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  transform(value: any, coins: Array<any>): unknown {
    const found = coins.find((coin: any) => coin.symbol == value.symbol.toLowerCase());
    if (found) {
      return this.formatter.format(found.current_price * value.qty);
    } else {
      return 0
    }

  }

}
