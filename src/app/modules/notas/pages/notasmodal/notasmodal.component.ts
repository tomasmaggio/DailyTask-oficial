import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private notasService: NotasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    //queremos saber si estamos creando una nota nueva o si estamos editando una nota existente


    this.nota = new Nota();
  }

  //creo el metodo
  onSubmit(form: NgForm){
    //el modal se cierra al apretar 'guardar'
    this.showModal = false 
    //guardar la nota y cargarlas dinamicamente al listado de notas
    this.notasService.add(form.value);
    this.router.navigateByUrl('/notas')
  }
  cancelarNota() {
    this.showModal = false;
  }

}
