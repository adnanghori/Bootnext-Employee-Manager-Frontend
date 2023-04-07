import { TestBed } from '@angular/core/testing';

import { RaiseLeaveRequestService } from './raise-leave-request.service';

describe('RaiseLeaveRequestService', () => {
  let service: RaiseLeaveRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiseLeaveRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
