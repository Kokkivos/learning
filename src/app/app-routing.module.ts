import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./provinces/provinces.module').then((m) => m.ProvincesModule),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
