import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign In',
  props<{ username: string; password: string }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ token: string }>()
);

export const signInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: string }>()
);

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ username: string; password: string }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success'
);

export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: string }>()
);

export const signOut = createAction('[Auth] Sign Out');
