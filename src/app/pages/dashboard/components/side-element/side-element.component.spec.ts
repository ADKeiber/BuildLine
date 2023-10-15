import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideElementComponent } from './side-element.component';

describe('SideElementComponent', () => {
  let component: SideElementComponent;
  let fixture: ComponentFixture<SideElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideElementComponent]
    });
    fixture = TestBed.createComponent(SideElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
