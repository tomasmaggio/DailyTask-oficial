import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
  animations:[
    trigger('itemAnim',[
      //animacion de entrada
      transition('void => *', [
        //estado inicial
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          //se va a expandir por fuera del padding
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        //animacion del spacing (height y margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(68)
      ])
    ])
  ]
})
export class NotasComponent {
  visible: boolean = false;
  showModal = false;
  selectedNotaId: number | null = null;
  i: number;
  modoEdicion: boolean = false; // Propiedad para controlar el modo de edición
  closeDialog() {
    this.showModal = false;

  }
  //notas
  notas: Nota[] = new Array<Nota>();


  constructor(private notasService: NotasService) { }

  ngOnInit() {
    //recuperar todas las notas del servicio
    this.notas = this.notasService.getAll();
    this.i = 0; // Asigna el valor inicial al índice

  }

  eliminarNota(id: number){
   this.notasService.delete(id); 
  }

  openModal() { 
    this.showModal = true;
  }


  
}
