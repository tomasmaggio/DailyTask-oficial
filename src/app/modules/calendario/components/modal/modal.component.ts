import { Component } from '@angular/core';
import { event } from 'jquery';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  event: any = { title: '', start: '', color: '' }; // línea para inicializar 'event'


  constructor(private SharedDataService: SharedDataService){}

  ngOnInit(){
    //me suscribo al servicio para recibir eventos 
    this.SharedDataService.event$.subscribe(event => {
      this.event = event;
      //console.log(event)
    })
  }

  guardarEvento(){
    console.log('Titulo del evento', this.event.title);

    //utilizo el servicio compartido para agregar el evento
    this.SharedDataService.addEvent(this.event)

  }



}