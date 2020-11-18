import { TestBed } from '@angular/core/testing';

import { MenubarConfigService } from './menubar-config.service';

describe('MenubarConfigService', () => {
  let service: MenubarConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenubarConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
