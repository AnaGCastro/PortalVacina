import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVacinacaoComponent } from './formulario-vacinacao.component';

describe('FormularioVacinacaoComponent', () => {
  let component: FormularioVacinacaoComponent;
  let fixture: ComponentFixture<FormularioVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
