import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleProvinceModel } from 'src/app/shared/models/Response';

import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
})
export class ProvinceComponent {
  baseClass: string = 'province';

  singleProvince$: Observable<SingleProvinceModel> =
    this._weatherService.singleProvince$;

  constructor(
    private route: ActivatedRoute,
    private _weatherService: WeatherService
  ) {}
}
