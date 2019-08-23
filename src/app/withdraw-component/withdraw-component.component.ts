import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawService } from './withdraw.service';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { signOut } from '../state/auth';

@Component({
  selector: 'app-withdraw-component',
  templateUrl: './withdraw-component.component.html',
  styleUrls: ['./withdraw-component.component.scss']
})
export class WithdrawComponent {
  error = '';
  amount = '';
  errorMessageVisible = false;

  @ViewChild('amount', {static: false}) amountTextbox: ElementRef;

  constructor(public router: Router, public withdrawService: WithdrawService,  private store: Store<AppState>) { }

  withdraw() {
    this.withdrawService.withdraw(parseInt(this.amount, 10)).subscribe(
      () => {this.error = 'Success!'},
      errorResponse => this.error = errorResponse.error.error
    );
    this.errorMessageCheck();
  }

  errorMessageCheck() {
    if(this.error === 'Success')
    {
      this.errorMessageVisible = false;
    } else
    {
      this.errorMessageVisible = true;
    }
  }

  balance() {
    this.router.navigate(['balance']);
  }

  signOut() {
    this.store.dispatch(signOut());
    }
}
