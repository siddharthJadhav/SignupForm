import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupForm: any;

  user = {
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    conformPassword: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      console.log(res);
    });

    this.dataService.getUser().subscribe(res => {
      console.log('user Data : ', res);
    });

  }

  signUp({value, valid}) {
    console.log('value : ', value);
    console.log('valid : ', valid);
    console.log('signupForm : ', this.signupForm);
    if (valid) {
      console.log('form is valid');
    } else {
      console.log('form is invalid');
    }
  }

}
