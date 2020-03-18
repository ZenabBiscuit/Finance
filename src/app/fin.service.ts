import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { Member } from './member.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FinService {
  expform: {amt:number, desc:string, createdBy:string} = {amt:0, desc:"", createdBy:""}
  expenses = []
  sum = 0
  constructor(public db: AngularFirestore, public auth:AuthServiceService) { 
    this.getExpenses()
  }
  
  addExpense(expenseAdded){
      //this.expenses.push(expenseAdded)
      //this.expform = {amount:"",desc:""}
     // console.log(expenseAdded)
      //console.log(this.expenses)
      let tempExp: {amt:number, desc:string, createdBy: string} = {amt:0, desc:"", createdBy:""}
      tempExp.amt = expenseAdded.amt
      tempExp.desc = expenseAdded.desc
      tempExp.createdBy = this.auth.getUserId()
      this.db.collection("expense").add(tempExp)
      this.expform = {amt:0, desc:"", createdBy:""}

  }

  delExpense(mem){
    //this.expenses.splice(this.expenses.indexOf(mem), 1)
    this.db.collection("expense").doc(mem.id).delete()
  }

  getExpenses(){
    console.log(this.auth.loggedInUserId)
    this.db.collection("expense", ref=>ref.orderBy("amt", "asc"))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe(res=>{
      this.expenses = res
    })
  }

  sumExpenses(){  
    console.log(this.sum)
  }

  updateExpense(id, data){
    this.db.collection("expense").doc(id).set(data)
  }

  getExpenseById(id){
    return this.db.collection("expense").doc(id).valueChanges()
  }

  getTotal(){
    this.db.collection("expense", ref=>ref.orderBy("amt", "asc"))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe(res=>{
      console.log(res)
      
    })
  }
}
