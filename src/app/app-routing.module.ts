import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { SummaryComponent } from './summary/summary.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'home/add-expenses', component:FinanceComponent},
  {path:'home/summary', component:SummaryComponent},
  {path:'signin', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
