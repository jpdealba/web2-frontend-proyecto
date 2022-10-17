import { TestBed } from '@angular/core/testing';

import { ServiceFiatService } from './service-fiat.service';

describe('ServiceFiatService', () => {
  let service: ServiceFiatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFiatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
