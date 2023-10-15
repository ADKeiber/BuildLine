import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropdownComponent } from './nav-dropdown.component';

describe('NavDropdownComponent', () => {
  let component: NavDropdownComponent;
  let fixture: ComponentFixture<NavDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropdownComponent]
    });
    fixture = TestBed.createComponent(NavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
