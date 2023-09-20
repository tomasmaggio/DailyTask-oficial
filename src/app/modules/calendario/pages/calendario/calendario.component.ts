import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
//aqui se importan los plugins del fullcalendar (primero hay que instalarlos https://fullcalendar.io/docs/plugin-index)
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  

  events: any[] = [
    {
      title: 'Cumpleaños de Juan',
      start: '2023-09-15'
    },
    {
       title: 'Reunión de equipo',
       start: '2023-09-10T14:00:00'
    },
    {
       title: 'Salida de campo',
       start: '2023-09-20T08:00:00'
    } 
  ];

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    
    events: this.events
  
  };
  
  
}
