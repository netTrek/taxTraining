import { TestBed, async, inject } from '@angular/core/testing';

import { ActivteDetailGuardGuard } from './activte-detail-guard.guard';

describe('ActivteDetailGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivteDetailGuardGuard]
    });
  });

  it('should ...', inject([ActivteDetailGuardGuard], (guard: ActivteDetailGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
