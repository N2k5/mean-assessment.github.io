import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service'; // Service that handles HTTP requests
import { signIn, signInSuccess, signInFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap(({ username, password }) =>
        this.authService.signIn(username, password).pipe(
          map((response: any) => signInSuccess({ token: response.token })),
          catchError((error) => of(signInFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
