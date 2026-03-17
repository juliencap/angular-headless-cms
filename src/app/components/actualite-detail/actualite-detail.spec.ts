import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { ActualiteDetail } from './actualite-detail';

describe('ActualiteDetail', () => {
  let component: ActualiteDetail;
  let fixture: ComponentFixture<ActualiteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualiteDetail],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '123-test-slug',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualiteDetail);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
