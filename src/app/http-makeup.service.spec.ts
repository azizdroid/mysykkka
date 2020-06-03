import { TestBed } from '@angular/core/testing';

import { HttpMakeupService } from './http-makeup.service';

describe('HttpMakeupService', () => {
  let service: HttpMakeupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMakeupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
