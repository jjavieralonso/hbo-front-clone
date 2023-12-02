import { TestBed } from '@angular/core/testing';

import { MenuSideService } from './menu-side.service';

describe('MenuSideService', () => {
  let service: MenuSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
