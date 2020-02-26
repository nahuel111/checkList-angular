import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionesSlotComponent } from './proyecciones-slot.component';

describe('ProyeccionesSlotComponent', () => {
  let component: ProyeccionesSlotComponent;
  let fixture: ComponentFixture<ProyeccionesSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeccionesSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionesSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
