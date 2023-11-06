/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotasService } from './notas.service';

describe('Service: Notas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotasService]
    });
  });

  it('should ...', inject([NotasService], (service: NotasService) => {
    expect(service).toBeTruthy();
  }));
});
