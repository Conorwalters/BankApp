import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PinEnterComponent } from './pin/pin-enter/pin-enter.component';
import { WithdrawComponent } from './withdraw-component/withdraw-component.component';
import { BalanceComponent } from './balance/balance.component';
import { KeypadComponent } from './keypad/keypad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PinEnterComponent,
    WithdrawComponent,
    BalanceComponent,
    KeypadComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
