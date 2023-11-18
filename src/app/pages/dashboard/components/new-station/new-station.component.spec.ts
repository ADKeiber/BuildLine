import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStationComponent } from './new-station.component';

describe('NewStationComponent', () => {
  let component: NewStationComponent;
  let fixture: ComponentFixture<NewStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStationComponent]
    });
    fixture = TestBed.createComponent(NewStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
