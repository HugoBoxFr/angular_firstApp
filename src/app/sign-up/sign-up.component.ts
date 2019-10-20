import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/sign-up/email';
import { User } from 'src/app/sign-up/user' ;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: Email = {
    name: 'Hugo',
  };

  user: User = new User();

  submitted = false;

  onSubmit() {
    this.submitted = true;
  };

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

  newUser() {
    this.user = new User();
  }



  constructor() { }

  ngOnInit() {
  }

}
