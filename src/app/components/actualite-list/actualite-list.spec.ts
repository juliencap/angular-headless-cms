import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ActualiteList } from './actualite-list';
import { WordpressService } from '../../services/wordpress';

describe('ActualiteList', () => {
  let component: ActualiteList;
  let fixture: ComponentFixture<ActualiteList>;

  const mockWpService = {
    getActualites: () =>
      of({
        body: [
          {
            id: 1,
            slug: 'test-article',
            title: { rendered: 'Test article' },
            date: '2025-06-24T19:29:00',
          },
        ],
        headers: {
          get: () => '1',
        },
      }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualiteList],
      providers: [provideRouter([]), { provide: WordpressService, useValue: mockWpService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualiteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load actualites on init', () => {
    expect(component.actualites().length).toBe(1);
    expect(component.actualites()[0].title.rendered).toBe('Test article');
    expect(component.totalPages()).toBe(1);
    expect(component.loading()).toBe(false);
  });

  it('should render article title in the DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test article');
  });
});
