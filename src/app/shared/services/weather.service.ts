import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { SingleProvinceModel, AllProvincesModel } from '../models/Response';
import { createFeatureSelector, Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state.redux';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';

  allProvinces$: Observable<AllProvincesModel> = this._store.select(
    createFeatureSelector<AllProvincesModel>('allProvinces')
  );

  singleProvince$: Observable<SingleProvinceModel> = this._store.select(
    createFeatureSelector<SingleProvinceModel>('singleProvince')
  );

  constructor(private _http: HttpClient, private _store: Store<AppState>) {}

  getAllProvinces(): Promise<AllProvincesModel | boolean> {
    return firstValueFrom(
      this._http.get<AllProvincesModel>(this.weatherUrl).pipe(
        map((result) => {
          return result;
        }),
        catchError(() => of(false))
      )
    );
  }

  public getProvinceInfo(CODPROV: string): Promise<SingleProvinceModel | any> {
    return firstValueFrom(
      this._http.get<AllProvincesModel>(`${this.weatherUrl}/${CODPROV}`).pipe(
        map((result) => {
          return result;
        }),
        catchError(() => of(false))
      )
    );
  }
}
