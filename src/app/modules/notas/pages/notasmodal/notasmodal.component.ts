import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Importa ActivatedRoute y Params aquí
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';



@Component({
  selector: 'app-notasmodal',
  templateUrl: './notasmodal.component.html',
  styleUrls: ['./notasmodal.component.css']
})
export class NotasmodalComponent implements OnInit {

  //modal
  @Input() showModal: boolean; //Este input se utiliza para determinar si el modal debe mostrarse o no. Viene del componente padre (notas.component).
  @Output() onClose = new EventEmitter<void>();// Este output emite un evento cuando se cierra el modal. El componente padre puede suscribirse a este evento.

  //Modelo de la nota
  nota: Nota; //Representa la nota actual que se está creando o editando.
  notaId: number; //Almacena el ID de la nota actualmente seleccionada para edición
  nuevo: boolean; //Indica si se está creando una nueva nota o editando una existente.

  constructor(
    private notasService: NotasService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit() { //Se ejecuta al inicializar el componente. Se suscribe a los parámetros de la URL para determinar si se está editando una nota 
              //existente o creando una nueva.
    this.route.params.subscribe((params: Params) => {
      this.nota = new Nota();
      if (params['id']) {
        this.nota = this.notasService.get(params['id']);
        this.notaId = params['id'];
        this.nuevo = false;
      } else {
        this.nuevo = true;
      }
    })

  }

  //creo el metodo
  onSubmit(form: NgForm) { //Se ejecuta al enviar el formulario. Agrega una nueva nota o actualiza una existente según el caso.
   
    //el modal se cierra al apretar 'guardar'
    this.showModal = false

    if (this.nuevo) {
      //guardar la nota y cargarlas dinamicamente al listado de notas
      this.notasService.add(form.value);
    } else {
      this.notasService.update(this.notaId, form.value.titulo, form.value.body);
    }

    this.router.navigateByUrl('/notas')


    //restablece el modal
    form.resetForm();
    // Cierra el modal
    this.showModal = false;

  }


  cancelarNota() { //Se ejecuta al hacer clic en el botón "Cancelar" y cierra el modal.
    this.showModal = false;
  }

 

}











