import { TestBed } from '@angular/core/testing';

import { _HeroService } from '../hero/hero.service';

describe('HeroService', () => {
  let service: _HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(_HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
