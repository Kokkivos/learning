import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from '../components/province/province.component';
import { ProvinceResolver } from '../components/province/province.resolver';

import { ProvincesComponent } from './provinces.component';
import { ProvincesResolver } from './provinces.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProvincesComponent,
        resolve: { provinces: ProvincesResolver },
      },
      {
        path: 'province/:CODPROV',
        component: ProvinceComponent,
        resolve: { provinces: ProvinceResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvincesRoutingModule {}
