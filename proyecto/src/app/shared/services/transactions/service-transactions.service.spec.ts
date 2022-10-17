import { TestBed } from '@angular/core/testing';

import { ServiceTransactionsService } from './service-transactions.service';

describe('ServiceTransactionsService', () => {
  let service: ServiceTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
