import { TestBed, waitForAsync } from '@angular/core/testing';
import { BookingFeatureCancelModule } from './booking-feature-cancel.module';

describe('BookingFeatureCancelModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureCancelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureCancelModule).toBeDefined();
  });
});
