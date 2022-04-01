import { createAction, props } from '@ngrx/store';

const actionSetProvince = createAction('[Province] SET PROVINCE', props<any>());

export const ProvinceInfoActions = {
  setProvince: actionSetProvince,
};
