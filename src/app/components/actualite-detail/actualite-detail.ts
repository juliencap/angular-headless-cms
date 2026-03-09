import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WordpressService } from '../../services/wordpress';
import { Actualite } from '../../interfaces/actualite.interface';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualite-detail.html',
  styleUrl: './actualite-detail.scss',
})
export class ActualiteDetail implements OnInit {
  actualite: Actualite | null = null;

  constructor(
    private route: ActivatedRoute,
    private wpService: WordpressService,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.wpService.getActualiteBySlug(slug).subscribe({
        next: (data) => (this.actualite = data[0]),
        error: (err) => console.error('Erreur API :', err),
      });
    }
  }
}
