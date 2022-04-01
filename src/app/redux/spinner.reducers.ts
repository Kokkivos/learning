import { createReducer, on } from '@ngrx/store';
import { SpinnerActions } from './spinner.actions';

export type SpinnerState = { show: boolean };
export const initialState: SpinnerState = { show: false };

export const SpinnerReducer = createReducer<SpinnerState>(
  initialState,
  on(
    SpinnerActions.updateSpinner,
    (state: SpinnerState, payload: SpinnerState) => {
      console.log(payload);
      return payload;
    }
  )
);
