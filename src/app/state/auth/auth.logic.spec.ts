import * as cloneDeep from 'lodash.clonedeep';
import { initialAuthState, AuthState } from './auth.state';
import { AuthLogic } from './auth.logic';

describe('Auth Logic', () => {
    afterEach(() => localStorage.clear());

    it('should sign in successfully', () => {
        const state = cloneDeep(initialAuthState);

        const newState = AuthLogic.signIn(state, 'Conor');

        expect(newState).not.toBe(state);
        expect(newState.isSignedIn).toBeTruthy();
        expect(newState.hasFailedAuth).toBeFalsy();
        expect(localStorage.getItem('signedInUser')).toEqual('Conor');
    });

    it('should fail authentication', () => {
        const state = cloneDeep(initialAuthState);

        const newState = AuthLogic.failAuthentication(state);

        expect(newState).not.toBe(state);
        expect(newState.isSignedIn).toBeFalsy();
        expect(newState.hasFailedAuth).toBeTruthy();
    });

    it('should reset auth state', () => {
        const newState = AuthLogic.resetAuthState();

        expect(newState.isSignedIn).toBeFalsy();
        expect(newState.hasFailedAuth).toBeFalsy();
    });
    it('should signout and reset auth state', () => {
        const newState = AuthLogic.signOut();

        expect(newState.isSignedIn).toBeFalsy();
        expect(newState.hasFailedAuth).toBeFalsy();
    });
});
