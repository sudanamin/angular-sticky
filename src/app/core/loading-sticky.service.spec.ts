import { TestBed, inject } from '@angular/core/testing';

import { LoadingStickyService } from './loading-sticky.service';

describe('LoadingStickyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingStickyService]
    });
  });

  it('should be created', inject([LoadingStickyService], (service: LoadingStickyService) => {
    expect(service).toBeTruthy();
  }));
});
