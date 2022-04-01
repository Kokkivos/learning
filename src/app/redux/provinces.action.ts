import { createAction, props } from '@ngrx/store';

const actionSetProvinces = createAction('[Provinces] SET ALL', props<any>());
const actionDeleteProvinces = createAction(
  '[Provinces] DELETE PROVINCE',
  props<any>()
);

export const ProvincesActions = {
  setProvinces: actionSetProvinces,
  deleteProvinces: actionDeleteProvinces,
};
