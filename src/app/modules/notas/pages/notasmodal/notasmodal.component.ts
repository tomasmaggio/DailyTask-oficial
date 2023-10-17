import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  constructor(private notasService: NotasService) { }

  ngOnInit() {
    this.nota = new Nota();
  }

  //creo el metodo
  onSubmit(form: NgForm){
    //guardar la nota 
    this.notasService.add(form.value);
  }

}
