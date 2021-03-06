import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  constructor() {

  }

  transform(array: Array<Pokemon>, orden: string): Array<Pokemon> {

    console.log(orden);

    array.sort((p1, p2) => {

      if (orden === "+") {
        return p1.id - p2.id;
      } else {
        return p2.id - p1.id;
      }

      /*TODO: ARREGLAR EL TEMA DEL NOMBRE!!
      if (campo === 'nombre') {
        console.log(campo);
        if (orden === "+") {
          if (p1.nombre.toUpperCase().localeCompare(p2.nombre.toUpperCase())) {
            return 1;
          }
        } else {

          return -1;

        }
      }

      /*if (p1.id > p2.id) {
        console.debug(p1);

        return -1;
      } else {
        console.debug(p2);

        return 1;
      }*/
    });

    return array;
  }


}
