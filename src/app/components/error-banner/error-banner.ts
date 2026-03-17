import { Component, inject } from '@angular/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error-banner',
  standalone: true,
  imports: [],
  templateUrl: './error-banner.html',
  styleUrl: './error-banner.scss',
})
export class ErrorBannerComponent {
  readonly errorService = inject(ErrorService);

  close(): void {
    this.errorService.clearError();
  }
}
