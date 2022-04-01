import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: any, args: { changeThis: string; forThis: string }): any {
    if (value) return value.replaceAll(args.changeThis, args.forThis);
  }
}
