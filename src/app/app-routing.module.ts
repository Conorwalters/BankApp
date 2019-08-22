import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinEnterComponent } from '../app/pin/pin-enter/pin-enter.component';
import { WithdrawComponent } from './withdraw-component/withdraw-component.component';
import { BalanceComponent } from './balance/balance.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [{ path:  '', redirectTo: 'pin', pathMatch: 'full' },
                        {path: 'pin', component: PinEnterComponent},
                        {path: 'home', component: WithdrawComponent, canActivate: [AuthGuard]},
                        {path: 'balance', component: BalanceComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
