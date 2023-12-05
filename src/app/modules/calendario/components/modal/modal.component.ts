import { Component, ViewChild, ElementRef } from '@angular/core';
import { event } from 'jquery';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  event: any = { title: '', start: '', color: '' }; // línea para inicializar 'event'

  @ViewChild('eventoForm') eventoForm: NgForm;  // Obtener referencia al formulario
  @ViewChild('ejemploModal') modalElement!: ElementRef;  // Obtener referencia al modal


  constructor(private SharedDataService: SharedDataService){}

  ngOnInit(){
    //me suscribo al servicio para recibir eventos 
    this.SharedDataService.event$.subscribe(event => {
      this.event = event;
      //console.log(event)
      
    })
  }

  

  guardarEvento() {
    console.log('Evento guardado:', this.event.title);
  
    if (this.event.id) {
      // Si el evento tiene un ID, significa que ya existe y debe ser editado
      this.SharedDataService.editEvent(this.event);
    } else {
      // Si no tiene un ID, es un nuevo evento y se agrega normalmente
      this.SharedDataService.addEvent(this.event);
    }
  
    this.cerrarModal();
  }
  cerrarModal() {
    // Cierra el modal usando Bootstrap
    $(this.modalElement.nativeElement).modal('hide');
  }
  



}