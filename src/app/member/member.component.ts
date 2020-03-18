import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FinService} from '../fin.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore/firestore';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input('member') data;
  editedExpense = {amt:0, desc:""}
  isformvisible = false
  constructor(public fins: FinService, public router:Router) { }

  ngOnInit() {
  }

  delete(){
    this.fins.delExpense(this.data) 
  }

  update(){
    this.isformvisible = !this.isformvisible
    this.fins.updateExpense(this.data.id, this.editedExpense)
  }

  onUpdateClicked(){
    this.editedExpense = this.data
    this.isformvisible = !this.isformvisible
  }

  sendToExpenseDetails(){
    let url = "/home/" + this.data.id
    this.router.navigateByUrl(url )
  }
}
