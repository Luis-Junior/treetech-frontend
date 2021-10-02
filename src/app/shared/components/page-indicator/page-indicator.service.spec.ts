import { TestBed } from '@angular/core/testing';

import { PageIndicatorService } from './page-indicator.service';

describe('PageIndicatorService', () => {
  let service: PageIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
