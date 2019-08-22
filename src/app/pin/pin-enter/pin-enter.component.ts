import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppState } from 'src/app/state';
import { isSignedIn, hasFailedAuth, resetAuthState, authenticate } from 'src/app/state/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './pin-enter.component.html',
  styleUrls: ['./pin-enter.component.scss']
})
export class PinEnterComponent {
  isSignedIn$ = this.store.pipe(
    select(isSignedIn),
    tap(signedIn => {
      if (signedIn) {
        this.router.navigateByUrl('/home');
      }
    })
  );
  hasFailedAuth$ = this.store.pipe(
    select(hasFailedAuth),
    tap(failed => {
      if (failed) {
        this.pin = null;
      }
    })
    );

  pin: number;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  onSignInClick() {
    this.store.dispatch(resetAuthState());
    this.store.dispatch(authenticate({pin: this.pin}));
  }

  onKeyPressed(key: number) {
    this.pin = parseInt(`${this.pin || ''}${key}`, 10);
  }

}
