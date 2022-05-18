import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasListComponent } from './vacinas-list.component';

describe('VacinasListComponent', () => {
  let component: VacinasListComponent;
  let fixture: ComponentFixture<VacinasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
