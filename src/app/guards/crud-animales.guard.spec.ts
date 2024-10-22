import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { crudAnimalesGuard } from './crud-animales.guard';

describe('crudAnimalesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => crudAnimalesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
