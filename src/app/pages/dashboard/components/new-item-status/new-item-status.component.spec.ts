import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemStatusComponent } from './new-item-status.component';

describe('NewItemStatusComponent', () => {
  let component: NewItemStatusComponent;
  let fixture: ComponentFixture<NewItemStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewItemStatusComponent]
    });
    fixture = TestBed.createComponent(NewItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
