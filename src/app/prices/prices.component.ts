import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})

export class PricesComponent {

  constructor() { }

  dataSource: any = [];

  @Input()
  set _pricesData(data: any) {
    if (data) {
      this.dataSource = data.productOfferingPrices;
    }
  }

  displayedColumns: string[] = ['name', 'amount'];

}
