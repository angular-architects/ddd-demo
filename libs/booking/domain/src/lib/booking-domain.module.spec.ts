import { TestBed, waitForAsync } from '@angular/core/testing';
import { BookingDomainModule } from './booking-domain.module';

describe('BookingDomainModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingDomainModule).toBeDefined();
  });
});
