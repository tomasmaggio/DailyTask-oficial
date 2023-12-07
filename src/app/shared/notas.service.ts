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

  getId(nota: Nota) { //Este método devuelve el id de una nota a partir de la nota misma. 
    //Es útil para obtener el id de una nota antes de realizar operaciones como actualización o eliminación.
    return this.notas.indexOf(nota);
  }



  add(nota: Nota) { // Este método agrega una nueva nota al arreglo de notas y devuelve el id de la nota recién agregada. 
    // Agrega una nueva nota al arreglo de notas, con el metodo push para agregarla al final del arreglo
    let newLength = this.notas.push(nota);

    // Calcula el índice de la nota recién agregada
    let index = newLength - 1;

    // Devuelve el índice de la nota recién agregada
    return index
  }



  //metodo actualizar nota
  update(id: number, titulo: string, body: string) { //Este método actualiza una nota existente según su id con los nuevos valores de título y body.
    // Obtiene la nota existente por su ID
    let nota = this.notas[id];

    // Actualiza el título y el cuerpo de la nota
    nota.titulo = titulo;
    nota.body = body;
  }

  //metodo eliminar nota
  delete(id: number) { //Este método elimina una nota según su id. Es útil para eliminar notas.
    this.notas.splice(id, 1);
  }


}
