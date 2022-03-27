import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stationTransfer'
})
export class StationTransferPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.transfer && item.transferLines.indexOf(filter.transferLines) !== -1);
  }

}
