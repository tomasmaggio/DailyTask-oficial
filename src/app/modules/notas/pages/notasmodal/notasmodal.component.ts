import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nota } from 'src/app/shared/nota.model';
import { NotasService } from 'src/app/shared/notas.service';



@Component({
  selector: 'app-notasmodal',
  templateUrl: './notasmodal.component.html',
  styleUrls: ['./notasmodal.component.css']
})
export class NotasmodalComponent implements OnInit {

  //modal
  @Input() showModal: boolean;
  @Output() onClose = new EventEmitter<void>();

  //Modelo de la nota
  nota: Nota;
  notaId: number;
  nuevo: boolean;

  constructor(private notasService: NotasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    //queremos saber si estamos creando una nota nueva o si estamos editando una nota existente
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.nota = this.notasService.get(params['id']);
        this.notaId = params['id'];
        this.nuevo = false;
      } else {
        this.nuevo = true;
      }
    })

    this.nota = new Nota();
  }

  //creo el metodo
  onSubmit(form: NgForm) {
    //el modal se cierra al apretar 'guardar'
    this.showModal = false

    if (this.nuevo) {
      //guardar la nota y cargarlas dinamicamente al listado de notas
      this.notasService.add(form.value);
      this.router.navigateByUrl('/notas')
    } else {
      this.notasService.update(this.notaId, form.value.titulo, form.value.body);
    }

    //restablece el modal
    form.resetForm();
    // Cierra el modal
    this.showModal = false;

  }
  cancelarNota() {
    this.showModal = false;
  }

 

}
