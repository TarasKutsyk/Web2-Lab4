import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargoFormComponent } from './add-cargo-form.component';

describe('AddCargoFormComponent', () => {
  let component: AddCargoFormComponent;
  let fixture: ComponentFixture<AddCargoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCargoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCargoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
