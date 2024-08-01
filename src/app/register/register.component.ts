import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from './../_service/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // customer:Customer[]=[]
  registerusers:any[]=[]
  userid: any = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    Conformpassword: '',
  };
  loginform = this.fb.group({
    Firstname: ['', [Validators.required]],
    Lastname: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required],
    Conformpassword: ['', Validators.required],
    validators: this.passwordMatchValidator,
  });
  passwordMatchValidator(group: FormGroup) {
    const { password, conformpassword } = group.value;
    return password === conformpassword ? null : { mismatch: true };
  }

  constructor(private fb: FormBuilder ,private http:HttpClient,) {}
  get Firstname() {
    return this.loginform.controls['Firstname'];
  }
  get Lastname() {
    return this.loginform.controls['Lastname'];
  }
  get Email() {
    return this.loginform.controls['Email'];
  }
  get Password() {
    return this.loginform.controls['Password'];
  }

  get Conformpassword() {
    return this.loginform.controls['Conformpassword'];
  }

  ngOnInit(): void {
    const localdata=localStorage.getItem('registerusers');
    if(localdata !=null){
this.registerusers = JSON.parse(localdata);
    }
  }
  done() {
    this.registerusers.push(this.userid);
    localStorage.setItem('registerusers',JSON.stringify(this.registerusers));
   this. userid = {
      Firstname: '',
      Lastname: '',
      Email: '',
      Password: '',
      Conformpassword: '',
    };
    if (this.loginform.valid) {
      // this.http.get('assets/objects.json',this.loginform.value).subscribe((res:any)=>{
    
        alert("data saved");
        console.log('Registration Data:', this.loginform.value);
      // })
     
      
      
  
   
    } else if (this.loginform.invalid) {
      alert('fill the details');
    }
  }
}
