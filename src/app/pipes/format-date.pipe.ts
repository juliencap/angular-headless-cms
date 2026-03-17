import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date, format: 'full' | 'short' = 'full'): string {
    if (!value) return '';

    const date = new Date(value);

    const day = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    if (format === 'short') {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'numeric',
      });
    }

    return `${day} à ${hours}h${minutes}`;
  }
}
