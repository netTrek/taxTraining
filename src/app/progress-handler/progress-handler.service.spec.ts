import { TestBed } from '@angular/core/testing';

import { ProgressHandlerService } from './progress-handler.service';

describe('ProgressHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressHandlerService = TestBed.get(ProgressHandlerService);
    expect(service).toBeTruthy();
  });
});
