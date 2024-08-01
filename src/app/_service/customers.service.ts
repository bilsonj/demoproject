import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
// customer:any[]=[]
private data:string[];
  constructor() { 
    this.data=[];
  }
  gettasks():string[]{
    return this.data
  }
  addtasks(task:string){
this.data.push(task)
  }
// add(registerusers_Firstname:string){
// const custom=new any();
// custom.Firstname=registerusers_Firstname;
// this.registerusers.push(custom)
// }
}
