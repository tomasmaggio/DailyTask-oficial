import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/app/models/notas';
import { Firestore, addDoc, collection, doc } from '@angular/fire/firestore';

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
  ngOnInit(): void {
    // Aquí puedes agregar la lógica de inicialización del componente
  }

}