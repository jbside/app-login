import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() disablePrimaryBtn : boolean = true;

  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
