import { TestBed, inject } from '@angular/core/testing';

import { Ng6CdkLibService } from './ng6-cdk-lib.service';

describe('Ng6CdkLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6CdkLibService]
    });
  });

  it('should be created', inject([Ng6CdkLibService], (service: Ng6CdkLibService) => {
    expect(service).toBeTruthy();
  }));
});
