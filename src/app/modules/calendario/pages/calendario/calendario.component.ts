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
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
  };

  events: any[] = [
    {
      title: 'Cumpleaños Juan',
      start: '2023-05-15'
    },
    {
       title: 'Reunión de trabajo',
       start: '2023-05-18T10:00:00'
    }
  ];

  
  
}
