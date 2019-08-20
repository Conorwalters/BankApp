import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawService } from './withdraw.service';

@Component({
  selector: 'app-withdraw-component',
  templateUrl: './withdraw-component.component.html',
  styleUrls: ['./withdraw-component.component.scss']
})
export class WithdrawComponent {
  error = '';
  amount = '';
  errorMessageVisible = false;

  constructor(public router: Router, public withdrawService: WithdrawService) { }

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
    this.router.navigate(['pin']);
  }
}
