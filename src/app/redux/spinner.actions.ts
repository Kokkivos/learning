import { createAction, props } from '@ngrx/store';

const updateSpinner = createAction('[Spinner] UPDATE Spinner', props<any>());

export const SpinnerActions = {
  updateSpinner: updateSpinner,
};
