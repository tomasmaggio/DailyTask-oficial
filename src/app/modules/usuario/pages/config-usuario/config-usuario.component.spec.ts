import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUsuarioComponent } from './config-usuario.component';

describe('ConfigUsuarioComponent', () => {
  let component: ConfigUsuarioComponent;
  let fixture: ComponentFixture<ConfigUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigUsuarioComponent]
    });
    fixture = TestBed.createComponent(ConfigUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
