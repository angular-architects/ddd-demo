import { async, TestBed } from '@angular/core/testing';
import { BoardingFeatureManageModule } from './boarding-feature-manage.module';

describe('BoardingFeatureManageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BoardingFeatureManageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoardingFeatureManageModule).toBeDefined();
  });
});
