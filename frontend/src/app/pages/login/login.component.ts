import { Component } from '@angular/core';
import { LoginDefautLayoutComponent } from '../../components/login-defaut-layout/login-defaut-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginDefautLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers : [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm! : FormGroup;

  constructor(
    private router : Router,
    private loginService : LoginService,
    private toastService : ToastrService
  ){
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)])
    });  
  }

  submit(){
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Sucesso!"),
      error: () => this.toastService.error("Erro na bagaça!")
    })
  }

  navigate(){
    this.router.navigate(["signup"]);
  }
}
