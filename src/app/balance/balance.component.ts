import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from './balance.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { signOut } from '../state/auth';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  currentBalance$: Observable<number>;
  isBalanceLabelVisible = false;

  constructor(public router: Router, public balanceService: BalanceService, private store: Store<AppState>) {
    this.currentBalance$ = this.balanceService.CheckBalance().pipe(map((response: any) => response.currentBalance));
  }

  checkbalance() {
      this.balanceService.CheckBalance().subscribe((result: any) => {
    });
      this.isBalanceLabelVisible = true;
  }

  navigateToWithdraw() {
    this.router.navigateByUrl('/home');
  }

  signout() {
    this.store.dispatch(signOut());
  }

}
