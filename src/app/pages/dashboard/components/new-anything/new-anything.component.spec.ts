import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnythingComponent } from './new-anything.component';

describe('NewAnythingComponent', () => {
  let component: NewAnythingComponent;
  let fixture: ComponentFixture<NewAnythingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAnythingComponent]
    });
    fixture = TestBed.createComponent(NewAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
