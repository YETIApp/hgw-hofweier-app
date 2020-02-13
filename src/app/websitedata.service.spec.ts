import { TestBed } from '@angular/core/testing';

import { WebsitedataService } from './websitedata.service';

describe('WebsitedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsitedataService = TestBed.get(WebsitedataService);
    expect(service).toBeTruthy();
  });
});
