import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };
  borderEmailError = false;
  borderPasswordError = false;
  showPassword = false;
  loading = false;

  handleFormChange(event: any) {
    // Implement form change handling logic here
  }

  handleLogin() {
    // Implement login handling logic here
  }
  constructor() { }

  ngOnInit(): void {
  }

}
