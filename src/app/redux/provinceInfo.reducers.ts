import { createReducer, on } from '@ngrx/store';
import { SingleProvinceModel } from '../shared/models/Response';
import { ProvinceInfoActions } from './provinceInfo.action';

export const initialState: SingleProvinceModel | undefined = undefined;

export const ProvinceInfoReducer = createReducer<any>(
  initialState,
  on(
    ProvinceInfoActions.setProvince,
    (state: SingleProvinceModel, payload: SingleProvinceModel) => payload
  )
);
