import { Pipe, PipeTransform } from '@angular/core';
import { ProvinceModel } from '../models/Response';

@Pipe({
  name: 'isProvinceModel',
})
export class IsProvinceModelPipe implements PipeTransform {
  transform(obj: any): obj is ProvinceModel {
    return 'CODPROV' in obj;
  }
}
