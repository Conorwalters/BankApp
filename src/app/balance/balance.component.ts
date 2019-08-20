import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from './balance.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  currentBalance$: Observable<number>;
  isBalanceLabelVisible = false;

  constructor(public router: Router, public balanceService: BalanceService) {
    this.currentBalance$ = this.balanceService.CheckBalance().pipe(map((response: any) => response.currentBalance));
  }

  checkbalance() {
      this.balanceService.CheckBalance().subscribe((result: any) => {
    });
      this.isBalanceLabelVisible = true;
  }

  navigateToWithdraw() {
    this.router.navigate(['withdraw']);
  }

  signout() {
    this.router.navigate(['pin']);
  }

}
