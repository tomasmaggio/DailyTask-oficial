import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/app/models/notas';
import { Firestore, addDoc, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(private afs: Firestore) { }


  //Añadir una nueva nota
  añadirNota(nota: Notas){
    nota.id = doc(collection(this.afs,'id')).id
    return addDoc(collection(this.afs,'notas'),nota)
  }

  //Obtener todas las notas
  obtenerNotas(): Observable<Notas[]>{
    let notasRef = collection(this.afs, 'notas')
    return collectionData(notasRef,{idField:'id'} )as
    Observable<Notas[]>
  }

  //Borrar una nota
  borrarNota(nota: Notas){
    
  }
  ngOnInit(): void {
    // Aquí puedes agregar la lógica de inicialización del componente
  }

}