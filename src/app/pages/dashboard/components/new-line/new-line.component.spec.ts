import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLineComponent } from './new-line.component';

describe('NewLineComponent', () => {
  let component: NewLineComponent;
  let fixture: ComponentFixture<NewLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLineComponent]
    });
    fixture = TestBed.createComponent(NewLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
