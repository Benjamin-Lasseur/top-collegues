import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'util';

@Pipe({
  name: 'filtreNom'
})
export class FiltreNomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != undefined) {
      if (args == undefined || args=="") {
        return value;
      } else {
        return value.filter(col => col.nom.toUpperCase().includes(args.toUpperCase()));
      }
    }
    return null
  }


}

