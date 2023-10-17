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


}
