import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/sign-up/email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: Email = {
    name: 'Hugo',
  };

  constructor() { }

  ngOnInit() {
  }

}
