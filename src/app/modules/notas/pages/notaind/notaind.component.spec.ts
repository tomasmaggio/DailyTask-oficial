/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotaindComponent } from './notaind.component';

describe('NotaindComponent', () => {
  let component: NotaindComponent;
  let fixture: ComponentFixture<NotaindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotaindComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
