import { TestBed, inject } from '@angular/core/testing';

import { TogglenavService } from './togglenav.service';

describe('TogglenavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TogglenavService]
    });
  });

  it('should be created', inject([TogglenavService], (service: TogglenavService) => {
    expect(service).toBeTruthy();
  }));
});
