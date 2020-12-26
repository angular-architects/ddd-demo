import { TestBed, waitForAsync } from '@angular/core/testing';
import { BoardingFeatureManageModule } from './boarding-feature-manage.module';

describe('BoardingFeatureManageModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BoardingFeatureManageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoardingFeatureManageModule).toBeDefined();
  });
});
