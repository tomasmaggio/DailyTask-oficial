import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  //opciones del modal
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }

  //notas
  notas: Nota[] = new Array<Nota>();


  constructor(){ }

  ngOnInit(){
  }

}
