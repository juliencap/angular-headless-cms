import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from '../../services/wordpress';
import { Actualite } from '../../interfaces/actualite.interface';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-actualite-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualite-list.html',
  styleUrl: './actualite-list.scss',
})
export class ActualiteList implements OnInit {
  readonly actualites = signal<Actualite[]>([]);
  readonly loading = signal(true);

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
          return this.wpService.getActualites(10, term);
        }),
      )
      .subscribe({
        next: (data) => {
          this.actualites.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        },
      });
  }

  private loadInitial(): void {
    this.wpService.getActualites(10).subscribe({
      next: (data) => {
        this.actualites.set(data);
        this.loading.set(false);
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
}
