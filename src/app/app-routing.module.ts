import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { SummaryComponent } from './summary/summary.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthGuardService]},
  {path:'home/add-expenses', component:FinanceComponent, canActivate:[AuthGuardService]},
  {path:'home/summary', component:SummaryComponent, canActivate:[AuthGuardService]},
  {path:'home/add-expenses', component:FinanceComponent, canActivate:[AuthGuardService]},
  {path:'home/:id', component:ExpenseDetailsComponent, canActivate:[AuthGuardService]},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'', redirectTo:'signin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
