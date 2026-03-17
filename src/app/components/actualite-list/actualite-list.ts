import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from '../../services/wordpress';
import { Actualite } from '../../interfaces/actualite.interface';

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

  constructor(private wpService: WordpressService) {}

  ngOnInit(): void {
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
}
