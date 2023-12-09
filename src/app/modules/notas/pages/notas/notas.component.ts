import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from './notas.service';
import { Notas } from 'src/app/models/notas';




@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {

  notaForm!: FormGroup

  notaObj: Notas = {
    id: '',
    titulo:'',
    descripcion:''
  }

  constructor(private notasService: NotasService, private formBuilder: FormBuilder) { 
    this.notaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    // Aquí puedes agregar la lógica de inicialización del componente
  }

  agregarNota (){
    const {value} = this.notaForm
    console.log(value);
  }

}