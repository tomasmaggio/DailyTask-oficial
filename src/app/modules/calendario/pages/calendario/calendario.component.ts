import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // útil para el chequeo de tipos
import { BrowserModule } from '@angular/platform-browser';
import { Calendar } from '@fullcalendar/core';
import { SharedDataService } from 'src/app/shared/shared-data.service';

// Importaciones de plugins del FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// Importaciones relacionadas con el manejo de fechas y locales
import format from 'date-fns/format';
import esLocale from '@fullcalendar/core/locales/es';
import es from 'date-fns/locale/es';
import { event } from 'jquery';

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

  @ViewChild('fullcalendar') fullcalendar!: CalendarioComponent;
  @ViewChild('ejemploModal') modalElement!: ElementRef;


  constructor(private SharedDataService: SharedDataService){}


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
    


    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    
    
    //idioma
    locale: esLocale,

    //seleccionar fechas (varias fechas) (no sirve para seleccionar o mover eventos)
    selectable: true, 

    //deseleccionar fechas automaticamente
    unselectAuto: true,

    

    //funcion para abrir el modal
     select: function(arg){
       $('#ejemploModal').modal('toggle');


       $('#guardarbtn').click(function(){
           var title = $('#title').val();
           console.log(title);
       })

      
     },
     
     dateClick: (info) => {
      const startInput = document.getElementById('start') as HTMLInputElement | null;
      const titleInput = document.getElementById('title') as HTMLInputElement | null;

      if (startInput && titleInput) {
        startInput.value = info.dateStr;
        titleInput.value = '';

        // Notifica al servicio con los datos del evento seleccionado
        this.SharedDataService.sendEvent({
          title: '',
          start: info.dateStr,
          color: '#3A4C94' // Puedes establecer un color predeterminado
        });

        $('#ejemploModal').modal('show');
      }
    },
    

    
    

     

  
    //Drag & Drop
    editable: true, //permite hacer los eventos editables (true)
    eventStartEditable: true,
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
    border: 2px solid #334275;
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
