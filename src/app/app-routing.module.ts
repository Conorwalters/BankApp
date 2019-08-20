import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinEnterComponent } from '../app/pin/pin-enter/pin-enter.component';
import { WithdrawComponent } from './withdraw-component/withdraw-component.component';
import { BalanceComponent } from './balance/balance.component';



const routes: Routes = [{ path: '', redirectTo: 'pin', pathMatch: 'full' },
                        {path: 'pin', component: PinEnterComponent},
                        {path: 'withdraw', component: WithdrawComponent},
                        {path: 'balance', component: BalanceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
