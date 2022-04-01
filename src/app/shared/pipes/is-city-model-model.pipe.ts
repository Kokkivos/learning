import { Pipe, PipeTransform } from '@angular/core';
import { CityModel } from '../models/Response';

@Pipe({
  name: 'isCityModelModel',
})
export class IsCityModelModelPipe implements PipeTransform {
  transform(obj: any): obj is CityModel {
    return 'idProvince' in obj;
  }
}
