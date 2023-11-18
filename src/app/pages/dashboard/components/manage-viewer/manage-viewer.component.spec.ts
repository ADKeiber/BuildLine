import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageViewerComponent } from './manage-viewer.component';

describe('ManageViewerComponent', () => {
  let component: ManageViewerComponent;
  let fixture: ComponentFixture<ManageViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageViewerComponent]
    });
    fixture = TestBed.createComponent(ManageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
