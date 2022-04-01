import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityModel, ProvinceModel } from '../../models/Response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  baseClass: string = 'list';
  itemBaseClass: string = 'list__item';
  itemLinkBaseClass: string = 'list__item--with-link';

  @Input() data: any | undefined;
  @Input() simpleHeader: boolean = true;
  @Input() linkable: boolean = false;

  @Output() handleClick = new EventEmitter<ProvinceModel>();

  rangeTemps(start: number, end: number) {
    return Array.from(Array(end - start + 1).keys()).map((x) => x + start);
  }

  getStatus(item: CityModel) {
    const { min } = item.temperatures;
    const minTemp = parseInt(min);

    const rangeTemps = this.rangeTemps(0, 10);

    if (rangeTemps.includes(minTemp)) {
      return 'cloud.png';
    } else if (minTemp > Math.max(...rangeTemps)) {
      return 'sun.png';
    } else if (minTemp < Math.min(...rangeTemps)) {
      return 'ice.png';
    } else {
      return false;
    }
  }
}
