import { Injectable } from '@angular/core';
import { Nota } from './nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  notas: Nota[] = new Array<Nota>();

  constructor() { }

    //metodos para administrar los datos que están dentro
    get(id: number) {
      return this.notas[id];
    }

    getId(nota: Nota) {
      return this.notas.indexOf(nota);
    }

    add(nota: Nota) {
      //este metodo agregará una nota al arreglo de notas y va a devolver el id de la nota
      //cuando el id = index
      let newLength = this.notas.push(nota);
      let index = newLength - 1;
      return index
    }



}
