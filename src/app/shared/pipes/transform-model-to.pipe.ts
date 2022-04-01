import { Pipe, PipeTransform } from '@angular/core';
import { AllProvincesModel } from '../models/Response';
@Pipe({
  name: 'transformModelTo',
})
export class TransformModelToPipe implements PipeTransform {
  transform(
    value: AllProvincesModel | null | any,
    args: { modelFrom: string; modelTo: string }
  ): any | undefined {
    const { modelFrom, modelTo } = args;

    // switch (modelTo) {
    //   case AllModelsType.DATA_LIST_MODEL:
    //     const result: DataListModel = value.map((val: ProvinceModel) => {
    //       let item: ItemModel = {
    //         name: val.NOMBRE_PROVINCIA,
    //         code: val.CODPROV,
    //       };

    //       return item;
    //     });

    //     return result;

    //   default:
    //     return undefined;
    // }
  }
}
