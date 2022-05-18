import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVacinasComponent } from './formulario-vacinas.component';

describe('FormularioVacinasComponent', () => {
  let component: FormularioVacinasComponent;
  let fixture: ComponentFixture<FormularioVacinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVacinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
