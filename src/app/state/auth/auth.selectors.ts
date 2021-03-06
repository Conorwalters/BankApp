import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectAuthState = (state: AppState) => state.auth;

export const isSignedIn = createSelector(
  selectAuthState,
  state => state.isSignedIn || !!localStorage.getItem('signedInUser')
);

export const hasFailedAuth = createSelector(
  selectAuthState,
  state => state.hasFailedAuth
);