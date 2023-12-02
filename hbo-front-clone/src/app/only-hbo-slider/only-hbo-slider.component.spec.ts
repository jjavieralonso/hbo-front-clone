import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyHboSliderComponent } from './only-hbo-slider.component';

describe('OnlyHboSliderComponent', () => {
  let component: OnlyHboSliderComponent;
  let fixture: ComponentFixture<OnlyHboSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlyHboSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlyHboSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
