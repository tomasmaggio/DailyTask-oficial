import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
//aqui se importan los plugins del fullcalendar (primero hay que instalarlos https://fullcalendar.io/docs/plugin-index)
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
//modal
import { ModalComponent } from '../../components/modal/modal.component';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  
  calendarOptions: CalendarOptions = {

    

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: esLocale, //idioma
    selectable: true, //seleccionar fechas (varias fechas) (no sirve para seleccionar o mover eventos)

    //Drag & Drop
    editable: true, //permite hacer los eventos editables (true)
    eventStartEditable: true,
    eventDrop: (info) => {
      // código para actualizar fecha en BD
    },
  };

  constructor(public modal: ModalComponent) {}




  
  
  
}
