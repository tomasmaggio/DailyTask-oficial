import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from './notas.service';
import { Nota } from 'src/app/shared/nota.model';




@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {

  notaForm!: FormGroup

  constructor(private notasService: NotasService, private formBuilder: FormBuilder) { 
    this.notaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    // Aquí puedes agregar la lógica de inicialización del componente
  }

  añadirNota(){
    const {value} = this.notaForm
    console.log(value);
  }

}