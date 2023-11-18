import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewviewerComponent } from './newviewer.component';

describe('NewviewerComponent', () => {
  let component: NewviewerComponent;
  let fixture: ComponentFixture<NewviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewviewerComponent]
    });
    fixture = TestBed.createComponent(NewviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
