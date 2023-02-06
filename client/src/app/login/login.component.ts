import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
  });

  onSubmit() {
    console.log('login submitted')
  }
}
