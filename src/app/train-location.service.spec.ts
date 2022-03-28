import { TestBed } from '@angular/core/testing';

import { TrainLocationService } from './train-location.service';

describe('TrainLocationService', () => {
  let service: TrainLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
