import { async, TestBed } from '@angular/core/testing';
import { BoardingDomainModule } from './boarding-domain.module';

describe('BoardingDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BoardingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoardingDomainModule).toBeDefined();
  });
});
