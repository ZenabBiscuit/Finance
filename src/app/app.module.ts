import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { SummaryComponent } from './summary/summary.component';

import { FormsModule } from '@angular/forms';
import { MemberComponent } from './member/member.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import 'firebase/firestore';
import { auth } from 'firebase/app'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    SummaryComponent,
    MemberComponent,
    NavbarComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    ExpenseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
