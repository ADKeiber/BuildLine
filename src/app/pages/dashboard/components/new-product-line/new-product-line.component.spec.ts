import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductLineComponent } from './new-product-line.component';

describe('NewProductLineComponent', () => {
  let component: NewProductLineComponent;
  let fixture: ComponentFixture<NewProductLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductLineComponent]
    });
    fixture = TestBed.createComponent(NewProductLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
