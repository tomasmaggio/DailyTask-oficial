import { Injectable } from '@angular/core';
import { Notas } from 'src/app/models/notas';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private afs: Firestore) { }

  // Añadir una nueva nota
  agregarNota(nota: Notas) {
    // Generar un ID único para la nueva nota utilizando Firestore
    nota.id = doc(collection(this.afs, 'id')).id;
    // Agregar la nueva nota a la colección 'notas' en Firestore
    return addDoc(collection(this.afs, 'notas'), nota);
  }

  // Obtener todas las notas
  obtenerNotas(): Observable<Notas[]> {
    // Obtener una referencia a la colección 'notas' en Firestore
    let notasRef = collection(this.afs, 'notas');
    // Devolver un Observable con los datos de la colección 'notas'
    return collectionData(notasRef, { idField: 'id' }) as Observable<Notas[]>;
  }

  // Borrar una nota
  borrarNota(nota: Notas) {
    // Obtener una referencia al documento específico de la nota en Firestore                          
    let docRef = doc(this.afs, `notas/${nota.id}`);
    // Borrar el documento de la nota en Firestore
    return deleteDoc(docRef);
  }

  // Editar una nota
  editarNota(nota: Notas, notas: any) {
    // Obtener una referencia al documento específico de la nota en Firestore
    let docRef = doc(this.afs, `notas/${nota.id}`);
    // Actualizar el documento de la nota en Firestore con los nuevos datos
    return updateDoc(docRef, notas);
  }
}