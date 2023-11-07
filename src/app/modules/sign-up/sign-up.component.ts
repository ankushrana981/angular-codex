import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  registerData: any = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  borderNameError = false;
  borderRegisterError = false;
  borderRegisterPasswordError = false;
  borderConfirmPasswordError = false;
  loading = false;
  constructor( private router: Router,private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  handleRegister() {
    
  this.router.navigate(['/login']);
  }
  handleCheck(event: any) {
    const { name, checked, value } = event.target;
    this.registerData[name] = checked ? value : '';
  }
}
