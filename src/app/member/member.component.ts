import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FinService} from '../fin.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input('member') data;
  constructor(public fins: FinService) { }

  ngOnInit() {
  }

  delete(event){
    this.fins.delExpense(this.data)
  }
}
