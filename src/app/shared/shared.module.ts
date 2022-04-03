import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { SpinnerReducer } from '../redux/spinner.reducers';

@NgModule({
  declarations: [
    SpinnerComponent,
    ReplacePipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    StoreModule.forFeature('spinner', SpinnerReducer),
  ],
  exports: [ SpinnerComponent, ReplacePipe],
})
export class SharedModule {}
