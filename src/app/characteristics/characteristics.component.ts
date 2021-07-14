import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {

  constructor() { }

  dataSource: any = [];

  @Input()
  set _characteristicsData(data: any) {
    if (data) {
      this.dataSource = data.characteristics;
    }
  }

  displayedColumns: string[] = ['name'];

}
