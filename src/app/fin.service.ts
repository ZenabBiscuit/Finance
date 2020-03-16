import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FinService {
  expform: {amount:number,desc:string} = {amount:0, desc:""}
  expenses = []
  sum = 0
  constructor(public db: AngularFirestore) { 
    this.sumExpenses()
    this.getExpenses()
  }
  
  addExpense(){
      //this.expenses.push(this.expform)
      //this.expform = {amount:"",desc:""}
      this.db.collection("expense").add(this.expform)
      this.expform = {amount:0, desc:""}
  }

  delExpense(mem){
    //this.expenses.splice(this.expenses.indexOf(mem), 1)
    this.db.collection("expense").doc(mem.id).delete()
  }

  getExpenses(){
    this.db.collection("expense", res=>res.orderBy('amount', 'asc'))
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
      this.expenses = res
    })
  }

  sumExpenses(){  
    console.log(this.sum)
  }
}
