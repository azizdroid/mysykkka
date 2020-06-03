import { TestBed } from '@angular/core/testing';

import { MakeupService } from './makeup.service';

describe('MakeupService', () => {
  let service: MakeupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
