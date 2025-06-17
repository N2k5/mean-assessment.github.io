import { createReducer, on } from '@ngrx/store';
import { signIn, signInSuccess, signInFailure, signOut } from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(signInSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
  })),
  on(signInFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(signOut, () => initialState)
);
