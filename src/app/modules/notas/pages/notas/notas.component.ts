import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  showModal = false;
  openModal() { this.showModal = true; }
  closeDialog() { this.showModal = false; }


  //notas
  notas: Nota[] = new Array<Nota>();


  constructor(private notasService: NotasService) { }

  ngOnInit() {
    //recuperar todas las notas del servicio
    this.notasService.getAll();
  }

}
