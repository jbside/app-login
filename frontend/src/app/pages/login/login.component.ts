import { Component } from '@angular/core';
import { LoginDefautLayoutComponent } from '../../components/login-defaut-layout/login-defaut-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginDefautLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
