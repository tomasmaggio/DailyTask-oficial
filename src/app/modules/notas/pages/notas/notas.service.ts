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
    nota.id = doc(collection(this.afs, 'id')).id;
    return addDoc(collection(this.afs, 'notas'), nota);
  }

  // Obtener todas las notas
  obtenerNotas(): Observable<Notas[]> {
    let notasRef = collection(this.afs, 'notas');
    return collectionData(notasRef, { idField: 'id' }) as Observable<Notas[]>;
  }

  // Borrar una nota
  borrarNota(nota: Notas) {
    let docRef = doc(this.afs, `notas/${nota.id}`);
    return deleteDoc(docRef);
  }

  // Editar una nota
  editarNota(nota: Notas, notas: any) {
    let docRef = doc(this.afs, `notas/${nota.id}`);
    return updateDoc(docRef, notas);
  }
}