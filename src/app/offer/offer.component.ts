import { Component, OnInit, Input, Output, } from '@angular/core';
import { AppService } from './../../app/app.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  listJson: any = [];
  dataInfo: any = [];

  constructor(private _AppService: AppService) { }

  ngOnInit() {
    this.list();
  }

  async list() {
    this._AppService.list({}, (result: any) => {
      this.listJson = result;
    })
  }

  changeOffer(data: any) {
    this.dataInfo = data.value;
  }

}
