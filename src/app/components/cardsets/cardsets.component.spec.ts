import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsetsComponent } from './cardsets.component';

describe('CardsetsComponent', () => {
  let component: CardsetsComponent;
  let fixture: ComponentFixture<CardsetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsetsComponent]
    });
    fixture = TestBed.createComponent(CardsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
