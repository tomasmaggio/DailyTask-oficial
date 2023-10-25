import { animate, query, stagger, style, transition, trigger, state } from '@angular/animations';
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
      ]),

      transition('* => void',[
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        animate('100ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0
        })),
        animate('150ms ease-out', style({
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom':0,
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class NotasComponent {
  visible: boolean = false;
  showModal = false;
  i: number;
  selectedNotaId: number | null = null;
  modoEdicion: boolean = false; 
  notaId: number | null = null; 

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

  //filtro para la barra de busqueda
  filtro(query:string){
    query = query.toLowerCase().trim();
    let todosResultados: Nota[] = new Array<Nota>();
    
    //buscar por palabras individuales
    let terms: string[] = query.split(''); //separar en espacios

    //remover terminos de busqueda duplicados
    terms = this.removerDuplicados(terms);

    //compilar todos los resultados revelantes

  }

  removerDuplicados(arr: Array<any>) : Array<any> {
    let unicoResultado: Set<any> = new Set<any>();

    //recorrer el array y agarrar los items
    arr.forEach(e => unicoResultado.add(e));

    return Array.from(unicoResultado);
  }

  notasRelevantes(query: any){
    query = query.toLowercase().trim();
  }




  openModal(id?: number) {
    if (id !== undefined) {
      // Si se proporciona un ID, estamos en modo de edición
      this.selectedNotaId = id;
      this.showModal = true;
    } else {
      // Si no se proporciona un ID, estamos en modo de creación
      this.selectedNotaId = null;
      this.showModal = true;
    }
  }

  
}
