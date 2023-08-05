import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioconfigComponent } from './usuarioconfig.component';

describe('UsuarioconfigComponent', () => {
  let component: UsuarioconfigComponent;
  let fixture: ComponentFixture<UsuarioconfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioconfigComponent]
    });
    fixture = TestBed.createComponent(UsuarioconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
