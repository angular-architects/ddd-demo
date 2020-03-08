import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureSearchModule } from './booking-feature-search.module';

describe('BookingFeatureSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureSearchModule).toBeDefined();
  });
});
