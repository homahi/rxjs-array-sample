import { TestBed, inject } from '@angular/core/testing';

import { RxjsSampleService } from './rxjs-sample.service';

describe('RxjsSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsSampleService]
    });
  });

  it('should be created', inject([RxjsSampleService], (service: RxjsSampleService) => {
    expect(service).toBeTruthy();
  }));
});
