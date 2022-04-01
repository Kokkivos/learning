import { Component } from '@angular/core';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpinnerState } from 'src/app/redux/spinner.reducers';
import { AppState } from 'src/app/redux/state.redux';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  spinner$: Observable<SpinnerState> = this._store.select(
    createFeatureSelector<SpinnerState>('spinner')
  );
  baseClass: string = 'spinner';

  constructor(private _store: Store<AppState>) {}
}
