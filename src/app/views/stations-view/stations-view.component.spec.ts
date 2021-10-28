import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsViewComponent } from './stations-view.component';

describe('StationsViewComponent', () => {
  let component: StationsViewComponent;
  let fixture: ComponentFixture<StationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
