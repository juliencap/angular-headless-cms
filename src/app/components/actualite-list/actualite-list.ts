import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from '../../services/wordpress';
import { Actualite } from '../../interfaces/actualite.interface';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-actualite-list',
  standalone: true,
  imports: [RouterLink, FormatDatePipe],
  templateUrl: './actualite-list.html',
  styleUrl: './actualite-list.scss',
})
export class ActualiteList implements OnInit {
  readonly actualites = signal<Actualite[]>([]);
  readonly loading = signal(true);
  readonly page = signal(1);
  readonly totalPages = signal(1);

  private searchSubject = new Subject<string>();

  constructor(private wpService: WordpressService) {}

  ngOnInit(): void {
    // chargement initial
    this.loadInitial();

    // flux de recherche RxJS
    this.searchSubject
      .pipe(
        debounceTime(300),
        switchMap((term) => {
          this.loading.set(true);
          this.page.set(1); // reset pagination
          return this.wpService.getActualites(10, term, 1);
        }),
      )
      .subscribe({
        next: (response) => {
          this.actualites.set(response.body || []);
          this.loading.set(false);

          const total = response.headers.get('X-WP-TotalPages');
          this.totalPages.set(total ? Number(total) : 1);
        },
        error: () => {
          this.loading.set(false);
        },
      });
  }

  private loadInitial(): void {
    this.wpService.getActualites(10, undefined, this.page()).subscribe({
      next: (response) => {
        this.actualites.set(response.body || []);
        this.loading.set(false);

        const total = response.headers.get('X-WP-TotalPages');
        this.totalPages.set(total ? Number(total) : 1);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.loadInitial();
  }

  nextPage(): void {
    this.page.update((p) => p + 1);
    this.loadInitial();
  }

  previousPage(): void {
    if (this.page() === 1) return;

    this.page.update((p) => p - 1);
    this.loadInitial();
  }
}
