import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WordpressService } from '../../services/wordpress';
import { Calendrier } from '../../interfaces/calendrier.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './calendrier.html',
  styleUrl: './calendrier.scss',
})
export class CalendrierComponent implements OnInit {
  calendriers: Calendrier[] = [];
  calendrierActif: Calendrier | null = null;

  constructor(
    private wpService: WordpressService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.wpService.getCalendriers().subscribe({
      next: (data) => {
        this.calendriers = [...data].reverse();
        this.calendrierActif = this.calendriers[0];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur API :', err),
    });
  }

  onSaisonChange(event: Event): void {
    const id = Number((event.target as HTMLSelectElement).value);
    this.calendrierActif = this.calendriers.find((c) => c.id === id) || null;
  }
}
