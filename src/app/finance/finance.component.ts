import { Component, OnInit } from '@angular/core';
import {FinService} from '../fin.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor(public fins: FinService) { }

  ngOnInit() {
  }

}
