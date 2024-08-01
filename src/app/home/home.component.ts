import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../_service/customers.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Email' ];
  registerusers:any[]=[];
  registerusersname:any;
  data:any;
  constructor(private task:CustomersService) {

   }

  ngOnInit(): void {
    const newLocal = localStorage.getItem('registerusers');
    this.data =  newLocal;
this.getdatas()
   this.registerusersname=localStorage.getItem('username')
  }
getdatas(){
  this.registerusers=JSON.parse(this.data)
  console.log(typeof this.registerusers, "type");
  
}
}
