import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { ProvinceInfoActions } from 'src/app/redux/provinceInfo.action';
import { SpinnerActions } from 'src/app/redux/spinner.actions';
import { AppState } from 'src/app/redux/state.redux';
import { SingleProvinceModel } from 'src/app/shared/models/Response';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class ProvinceResolver
  implements Resolve<SingleProvinceModel | boolean>
{
  constructor(
    private _weatherService: WeatherService,
    private _store: Store<AppState>,
    private _router: Router
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<SingleProvinceModel | boolean> {
    this._store.dispatch(SpinnerActions.updateSpinner({ show: true }));
    const codProv = route.params['CODPROV'];

    let province: SingleProvinceModel | boolean =
      await this._weatherService.getProvinceInfo(codProv);

    this._store.dispatch(SpinnerActions.updateSpinner({ show: true }));

    if (province)
      this._store.dispatch(ProvinceInfoActions.setProvince(province));
    else this._router.navigate(['error']);

    this._store.dispatch(SpinnerActions.updateSpinner({ show: false }));

    return province;
  }
}
