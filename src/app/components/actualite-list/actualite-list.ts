import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  actualites: Actualite[] = [];

  constructor(
    private wpService: WordpressService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.wpService.getActualites(10).subscribe({
      next: (data) => {
        this.actualites = data;
        this.cdr.detectChanges(); // force la mise à jour du DOM
      },
      error: (err) => console.error('Erreur API :', err),
    });
  }
}
