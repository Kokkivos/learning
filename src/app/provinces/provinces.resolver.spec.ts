import { TestBed } from '@angular/core/testing';

import { ProvincesResolver } from './provinces.resolver';

describe('ProvincesResolver', () => {
  let resolver: ProvincesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProvincesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
