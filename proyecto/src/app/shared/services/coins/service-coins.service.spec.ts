import { TestBed } from '@angular/core/testing';

import { ServiceCoinsService } from './service-coins.service';

describe('ServiceCoinsService', () => {
  let service: ServiceCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
