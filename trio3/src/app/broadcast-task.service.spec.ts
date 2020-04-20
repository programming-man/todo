import { TestBed } from '@angular/core/testing';

import { BroadcastTaskService } from './broadcast-task.service';

describe('BroadcastTaskService', () => {
  let service: BroadcastTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
