import { TestBed } from '@angular/core/testing';

import { GreetingserviceService } from './greetingservice.service';

describe('GreetingserviceService', () => {
  let service: GreetingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
