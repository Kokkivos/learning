import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AppState } from '../redux/state.redux';
import { AllProvincesModel } from '../shared/models/Response';
import { WeatherService } from '../shared/services/weather.service';
import { Store } from '@ngrx/store';
import { SpinnerActions } from '../redux/spinner.actions';
import { ProvincesActions } from '../redux/provinces.action';

@Injectable({
  providedIn: 'root',
})
export class ProvincesResolver implements Resolve<any> {
  constructor(
    private _weatherService: WeatherService,
    private _store: Store<AppState>
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<AllProvincesModel | boolean> {
    this._store.dispatch(SpinnerActions.updateSpinner({ show: true }));

    const provinces: AllProvincesModel | boolean =
      await this._weatherService.getAllProvinces();

    this._store.dispatch(ProvincesActions.setProvinces(provinces));
    this._store.dispatch(SpinnerActions.updateSpinner({ show: false }));

    return provinces;
  }
}
