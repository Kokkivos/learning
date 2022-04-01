import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProvincesActions } from '../redux/provinces.action';
import { AppState } from '../redux/state.redux';
import { AllProvincesModel, ProvinceModel } from '../shared/models/Response';
import { WeatherService } from '../shared/services/weather.service';
import { AllModelsType } from '../shared/models/allModelsType';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss'],
})
export class ProvincesComponent {
  baseClass: string = 'provinces';

  allModelsType = AllModelsType;

  allProvinces$: Observable<AllProvincesModel> =
    this._weatherService.allProvinces$;

  constructor(
    private _store: Store<AppState>,
    private _weatherService: WeatherService
  ) {}

  deleteProvince(province: ProvinceModel) {
    this._store.dispatch(ProvincesActions.deleteProvinces(province));
  }
}
