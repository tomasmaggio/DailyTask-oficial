import { Component } from '@angular/core';
import { event } from 'jquery';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private SharedDataService: SharedDataService){}

  ngOnInit(){
    //me suscribo al servicio para recibir eventos 
    this.SharedDataService.event$.subscribe(event => {

      console.log(event)
    })
  }

}