import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/app/models/notas';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes agregar la lógica de inicialización del componente
  }

}