import { TestBed } from '@angular/core/testing';

import { AppProgressInterceptorService } from './app-progress-interceptor.service';

describe('AppProgressInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppProgressInterceptorService = TestBed.get(AppProgressInterceptorService);
    expect(service).toBeTruthy();
  });
});
