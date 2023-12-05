import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchlistBtnComponent } from './add-watchlist-btn.component';

describe('AddWatchlistBtnComponent', () => {
  let component: AddWatchlistBtnComponent;
  let fixture: ComponentFixture<AddWatchlistBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWatchlistBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWatchlistBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
