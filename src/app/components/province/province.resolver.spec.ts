import { TestBed } from '@angular/core/testing';

import { ProvinceResolver } from './province.resolver';

describe('ProvinceResolver', () => {
  let resolver: ProvinceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProvinceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
