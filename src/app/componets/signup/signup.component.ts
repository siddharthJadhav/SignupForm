import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    conformPassword: ''
  };

  constructor() { }

  ngOnInit() {
  }

  signUp(event) {
    console.log('signup : ', event);
    event.preventDefault();
    console.log('user data : ', this.user);
  }

}
