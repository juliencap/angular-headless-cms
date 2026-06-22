import { SlicePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Calendrier } from '../../interfaces/calendrier.interface';
import { WordpressService } from '../../services/wordpress';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './calendrier.html',
  styleUrl: './calendrier.scss',
  encapsulation: ViewEncapsulation.None,
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
