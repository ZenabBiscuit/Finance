import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinService } from '../fin.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  id
  expenses:any = {amt:0, desc:""}
  constructor(public route:ActivatedRoute, public fins:FinService) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res['id']
      this.fins.getExpenseById(this.id).subscribe(res=>{
      this.expenses = res
      })
    })
  }

}
