import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerSectionComponent } from './spinner-section.component';

describe('SpinnerSectionComponent', () => {
  let component: SpinnerSectionComponent;
  let fixture: ComponentFixture<SpinnerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerSectionComponent]
    });
    fixture = TestBed.createComponent(SpinnerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
