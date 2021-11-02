import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoesViewComponent } from './cargoes-view.component';

describe('CargoesViewComponent', () => {
  let component: CargoesViewComponent;
  let fixture: ComponentFixture<CargoesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
