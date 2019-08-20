import { Component } from '@angular/core';
import { PinService } from '../pin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-enter',
  templateUrl: './pin-enter.component.html',
  styleUrls: ['./pin-enter.component.scss']
})

export class PinEnterComponent {
  pin = '';
  error = '';
  errorMessageVisible = false;

  constructor(public router: Router, public pinService: PinService) {
  }

  submitPin() {
    this.pinService.enterPin(parseInt(this.pin, 10)).subscribe(() => {
        this.router.navigate(['withdraw'])},
        errorRes => this.error = errorRes.error.error
    );
    if(this.error != '')
    {
    } else {
      this.pin = '';
      this.errorMessageVisible = true;
    }
    this.pin = '';
  }

  onKeyPressed(key: number) {
    this.pin = `${this.pin || ''}${key}`, 10;
  }
}
