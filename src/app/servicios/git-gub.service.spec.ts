import { TestBed } from '@angular/core/testing';

import { GitGubService } from './git-gub.service';

describe('GitGubService', () => {
  let service: GitGubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitGubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
