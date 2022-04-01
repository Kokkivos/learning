import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { SpinnerReducer } from '../redux/spinner.reducers';
import { TransformModelToPipe } from './pipes/transform-model-to.pipe';
import { IsProvinceModelPipe } from './pipes/is-province-model.pipe';
import { IsCityModelModelPipe } from './pipes/is-city-model-model.pipe';

@NgModule({
  declarations: [
    ListComponent,
    SpinnerComponent,
    ReplacePipe,
    TransformModelToPipe,
    IsProvinceModelPipe,
    IsCityModelModelPipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    StoreModule.forFeature('spinner', SpinnerReducer),
  ],
  exports: [ListComponent, SpinnerComponent, ReplacePipe, TransformModelToPipe],
})
export class SharedModule {}
