import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { WordpressService } from './wordpress';

describe('WordpressService', () => {
  let service: WordpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });

    service = TestBed.inject(WordpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
