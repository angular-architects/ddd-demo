import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureCancelModule } from './booking-feature-cancel.module';

describe('BookingFeatureCancelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureCancelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureCancelModule).toBeDefined();
  });
});
