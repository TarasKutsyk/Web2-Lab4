import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanetFormComponent } from './add-planet-form.component';

describe('AddPlanetFormComponent', () => {
  let component: AddPlanetFormComponent;
  let fixture: ComponentFixture<AddPlanetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
