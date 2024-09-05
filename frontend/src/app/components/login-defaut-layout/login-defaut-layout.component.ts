import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-defaut-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-defaut-layout.component.html',
  styleUrl: './login-defaut-layout.component.scss'
})
export class LoginDefautLayoutComponent {
  @Input() title : string = "";
  @Input() primaryBtnText : string = "";
  @Input() secundaryBtnText : string = "";
}
