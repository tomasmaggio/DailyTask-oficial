import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // útil para el chequeo de tipos
import { BrowserModule } from '@angular/platform-browser';
import { Calendar } from '@fullcalendar/core';
import { SharedDataService } from 'src/app/modules/calendario/services/shared-data.service';

// Importaciones de plugins del FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// Importaciones relacionadas con el manejo de fechas y locales
import format from 'date-fns/format';

import esLocale from '@fullcalendar/core/locales/es';
import es from 'date-fns/locale/es';
import { event } from 'jquery';
import { FullCalendarComponent } from '@fullcalendar/angular';

function obtenerAbreviaturaDia(fecha: Date): string {
  const dias = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  return dias[fecha.getDay()];
}



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  @ViewChild('fullcalendar') calendarComponent!: CalendarioComponent;
  @ViewChild('ejemploModal') modalElement!: ElementRef;
  @ViewChild(FullCalendarComponent, { static: true }) fullcalendar!: FullCalendarComponent;



  constructor(private SharedDataService: SharedDataService) {

    //suscripcion a eventos editados
    this.SharedDataService.editedEvent$.subscribe(editedEvent => {
      const calendarApi = this.fullcalendar.getApi();
      const existingEvent = calendarApi.getEventById(editedEvent.id);

      if (existingEvent) {
        existingEvent.setProp('title', editedEvent.title);
        existingEvent.setProp('color', editedEvent.color);
        existingEvent.setStart(editedEvent.start);
        existingEvent.setEnd('editedEvent.end');
        existingEvent.setExtendedProp('customData', editedEvent.customData);
        existingEvent.setExtendedProp('otherCustomData', editedEvent.otherCustomData);

      }

    })
  }



  ngAfterViewInit() {
    //  acceder a la API de FullCalendar de manera segura
    if (this.fullcalendar && this.fullcalendar.getApi) {
      this.fullcalendar.getApi().gotoDate(new Date()); // Por ejemplo, aquí estamos yendo a la fecha actual

      this.SharedDataService.event$.subscribe(event => {
        const eventExists = this.fullcalendar.getApi().getEvents().some(e => e.start === event.start);

        if (!eventExists) {
          this.fullcalendar.getApi().addEvent(event);
        }
      });
    }
  }


  ngOnInit() {
    // Suscribirse al servicio compartido para recibir eventos
    this.SharedDataService.event$.subscribe(event => {
      // Verificar si el evento ya existe en la lista
      const eventExists = this.events.some(e => e.start === event.start);

      if (!eventExists) {
        // Agregar el evento a la lista de eventos
        this.events = [...this.events, event];

        // Actualizar los eventos en el calendario
        this.calendarOptions.events = this.events;
      }
    });
  }



  events: any[] = [
    {
      title: 'Corte de pelo de panchito 🐶',
      start: '2023-12-07',
      color: '#1967D2',
    },
    {
      title: 'Clases de Alemán',
      start: '2023-12-08',
      color: '#F72A25'
    },
    {
      title: 'Llevar el carro al mecánico',
      start: '2023-12-09',
      color: '#0b5394'
    },
    {
      title: 'Estudiar',
      start: '2023-12-09',
      color: '#f1c232'
    },


  ];



  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth', //vista de mes 
    plugins: [dayGridPlugin, interactionPlugin],
    locale: esLocale,//idioma
    selectable: true, //seleccionar fechas (varias fechas) (no sirve para seleccionar o mover eventos)
    unselectAuto: true,//deseleccionar fechas automaticamente

    editable: true,//permite hacer los eventos editables
    eventStartEditable: true,

    select: (info) => {
      // Evitar la creación automática de eventos vacíos al hacer clic en una fecha
      this.fullcalendar.getApi().unselect();
    },


    // Función que se ejecuta al hacer clic en una fecha del calendario
    dateClick: (info) => {
      // Obtener referencias a elementos de entrada en el modal
      const startInput = document.getElementById('start') as HTMLInputElement;
      const titleInput = document.getElementById('title') as HTMLInputElement;
      const colorInput = document.getElementById('color') as HTMLInputElement;

      // Verificar la existencia de los elementos de entrada
      if (startInput && titleInput) {
        // Establecer la fecha seleccionada en el campo de inicio
        startInput.value = info.dateStr;
        // Limpiar los campos de título y color en el modal
        titleInput.value = '';
        colorInput.value = '';

        // Notificar al servicio con los datos del evento seleccionado
        this.SharedDataService.sendEvent({
          start: info.dateStr,
          title: '',
          color: 'transparent'
        });

        // Mostrar el modal de ejemplo
        $('#ejemploModal').modal('show');
      }
    },








    //Drag & Drop
    eventDrop: (info) => {
      // código para actualizar fecha en BD
    },

    eventMouseEnter: this.handleEventMouseEnter.bind(this),
    eventMouseLeave: this.handleEventMouseLeave.bind(this),

    events: this.events

  };


  //Funcion para mostrar el Tooltip cada que se le pasa el cursor por encima de un evento en en el calendario
  handleEventMouseEnter(info: any): void {
    const eventColor = info.event.backgroundColor || info.event.borderColor || '';
    // Formatear la fecha en el formato deseado con la abreviatura del día
    const formattedDate = info.event.start
      ? format(new Date(info.event.start), "'- 'EEE dd LLL - h:mm a", { locale: es })
      : '';

    const tooltip = `<div class="calendarTooltip" style="
    padding-left:10px; 
    text-align: start;
    padding: 4px;
    padding-inline: 50px;
    width:auto;
    height:auto;
    background:${eventColor};
    border-radius: 4px; 
    color: white; 
    position:absolute;
    z-index:10001;">
    ${info.event.title} ${formattedDate}</div>`;

    const $tool = $(tooltip).appendTo('body');

    $(info.el).mouseover(function (e) {
      $(this).css('z-index', 10000);
      $tool.fadeIn('1000');
      $tool.fadeTo(10, 1.9);



    }).mousemove(function (e) {
      $tool.css('top', e.pageY + 10);
      $tool.css('left', e.pageX + 20);
    });


  }

  handleEventMouseLeave(info: any): void {
    $(info.el).css('z-index', 8);
    $('.calendarTooltip').remove();
  }


}
