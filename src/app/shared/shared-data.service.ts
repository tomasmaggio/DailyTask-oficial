import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private eventSource = new Subject<any>();

  event$ = this.eventSource.asObservable();

  sendEvent(event: any) {
    this.eventSource.next(event);
  }
}
