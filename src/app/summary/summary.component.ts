import { Component, OnInit, Input } from '@angular/core';
import {FinService} from '../fin.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  totExp = 0
  constructor(public fins: FinService) { }

  ngOnInit() {
    let total = 0
    for (var i=0; i<this.fins.expenses.length; i++){
      if(this.fins.expenses[i].amt){
        total += this.fins.expenses[i].amt
        this.totExp = total
      }
    }
  }

  
}
