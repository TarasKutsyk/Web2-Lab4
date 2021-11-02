import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoesComponent } from './cargoes.component';

describe('CargoesComponent', () => {
  let component: CargoesComponent;
  let fixture: ComponentFixture<CargoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
