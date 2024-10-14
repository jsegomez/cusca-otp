import { TestBed } from '@angular/core/testing';

import { CuscaOtpService } from './cusca-otp.service';

describe('CuscaOtpService', () => {
  let service: CuscaOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuscaOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
