import { Injectable } from '@angular/core';
import { Nota } from './nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  notas: Nota[] = new Array<Nota>();

  constructor() { }

  /* ----------- metodos para administrar los datos que están dentro ---------- */

  get(id: number) { //Este método devuelve una nota específica según su id. Es útil para obtener una nota en particular.
    return this.notas[id];
  }

  getAll() { //Este método devuelve todas las notas almacenadas en el servicio. Es útil para cargar la lista completa de notas.
    return this.notas;
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

  //metodo actualizar nota
  update(id: number, titulo: string, body: string) {
    let nota = this.notas[id];
    nota.titulo = titulo;
    nota.body = body;
  }

  //metodo eliminar nota
  delete(id: number) {
    this.notas.splice(id, 1);
  }


}
