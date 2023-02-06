import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
  });

  onSubmit() {
    console.log('Registration request submitted')
  }

}
