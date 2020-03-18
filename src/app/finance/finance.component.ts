import { Component, OnInit } from '@angular/core';
import {FinService} from '../fin.service';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  expense : Member = {amt:0, desc:"", createdBy:""}

  constructor(public fins: FinService, public router:Router) { }

  ngOnInit() {
  }

  addExpense(){
    this.fins.addExpense(this.expense)
    this.expense = {amt:0, desc:"", createdBy:""}
    this.router.navigateByUrl('/home')
  }

}
