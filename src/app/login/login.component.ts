import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../_service/customers.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerusers: any;
  login: any = {
    email: '',
    password: '',
  };
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  // router: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public task: CustomersService
  ) {}
  get email() {
    return this.loginform.controls['email'];
  }
  get password() {
    return this.loginform.controls['password'];
  }
  ngOnInit(): void {
    const newLocal = localStorage.getItem('registerusers');
    this.registerusers = newLocal;
    console.log(this.registerusers);
  }

  donelogin() {
    console.log(this.login.email, 'email');
    console.log(this.login.password, 'password');
    console.log(this.registerusers, 'datas');
    console.log(typeof this.registerusers, 'type');
    const details = JSON.parse(this.registerusers);
    console.log(typeof details, 'details type');
    if (this.loginform.invalid) {
      alert('fill the details');
    }else{
      const userData = details.filter((data: any) => {
        if (
          data.Email == this.login.email &&
          data.Password == this.login.password
        ) {
          return data;
        }
      });
      console.log(userData, 'userdatas');
      if (userData.length > 0) {
        localStorage.setItem('username',userData[0].Firstname)
        localStorage.setItem('email',userData[0].Email)
        this.router.navigate(['/home']);
      } else {
        alert('user details not found / miss match');
      }
    }
 

    

  
 
  }
}
