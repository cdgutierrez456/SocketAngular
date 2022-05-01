import { TestBed } from '@angular/core/testing';

import { Request.ServiceService } from './request.service.service';

describe('Request.ServiceService', () => {
  let service: Request.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Request.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
