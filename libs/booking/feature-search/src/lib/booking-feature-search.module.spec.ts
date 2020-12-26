import { TestBed, waitForAsync } from '@angular/core/testing';
import { BookingFeatureSearchModule } from './booking-feature-search.module';

describe('BookingFeatureSearchModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureSearchModule).toBeDefined();
  });
});
