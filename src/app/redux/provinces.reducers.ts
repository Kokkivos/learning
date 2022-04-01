import { createReducer, on } from '@ngrx/store';
import { ProvinceModel, AllProvincesModel } from '../shared/models/Response';
import { ProvincesActions } from './provinces.action';

export const initialState: AllProvincesModel | undefined = undefined;

export const ProvincesReducer = createReducer<any>(
  initialState,
  on(
    ProvincesActions.setProvinces,
    (state: AllProvincesModel, payload: AllProvincesModel) => payload
  ),
  on(
    ProvincesActions.deleteProvinces,
    (state: AllProvincesModel, payload: ProvinceModel) =>
      Object.assign({}, state, {
        provincias: state.provincias.filter(
          (province: ProvinceModel) => province.CODPROV !== payload.CODPROV
        ),
      })
  )
);
