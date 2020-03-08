import { async, TestBed } from '@angular/core/testing';
import { BookingDomainModule } from './booking-domain.module';

describe('BookingDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingDomainModule).toBeDefined();
  });
});
