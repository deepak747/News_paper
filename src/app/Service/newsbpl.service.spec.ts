import { TestBed } from '@angular/core/testing';

import { NewsbplService } from './newsbpl.service';

describe('NewsbplService', () => {
  let service: NewsbplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsbplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
