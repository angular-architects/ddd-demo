import { TestBed, waitForAsync } from '@angular/core/testing';
import { BoardingDomainModule } from './boarding-domain.module';

describe('BoardingDomainModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BoardingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoardingDomainModule).toBeDefined();
  });
});
