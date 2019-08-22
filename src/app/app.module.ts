import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PinEnterComponent } from './pin/pin-enter/pin-enter.component';
import { WithdrawComponent } from './withdraw-component/withdraw-component.component';
import { BalanceComponent } from './balance/balance.component';
import { KeypadComponent } from './keypad/keypad.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducerToken, reducerProvider } from './state';
import { AuthEffects } from './state/auth';
import { EffectsModule } from '@ngrx/effects';
import { I18NModule } from './i18n/i18n.module';


@NgModule({
  declarations: [
    AppComponent,
    PinEnterComponent,
    WithdrawComponent,
    BalanceComponent,
    KeypadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducerToken, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AuthEffects]),
    I18NModule
  ],
  providers: [
    reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
