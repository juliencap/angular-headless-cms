import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Une erreur est survenue.';

      if (error.status === 0) {
        message = 'Impossible de contacter le serveur.';
      } else if (error.status === 404) {
        message = 'Ressource introuvable.';
      } else if (error.status === 500) {
        message = 'Erreur serveur, réessayez plus tard.';
      }

      errorService.setError(message);
      return throwError(() => error);
    }),
  );
};
