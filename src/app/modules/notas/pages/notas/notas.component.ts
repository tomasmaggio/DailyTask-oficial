import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  visible: boolean = false;
  showModal = false;
  selectedNotaId: number | null = null;
  i: number;

  

  
  closeDialog() {
    this.showModal = false;

  }



  //notas
  notas: Nota[] = new Array<Nota>();


  constructor(private notasService: NotasService) { }

  ngOnInit() {
    //recuperar todas las notas del servicio
    this.notas = this.notasService.getAll();
  }

  eliminarNota(id: number){
   this.notasService.delete(id); 
  }

  openModal(id: number) { 
    this.selectedNotaId = id;
    this.showModal = true;
  }
}
