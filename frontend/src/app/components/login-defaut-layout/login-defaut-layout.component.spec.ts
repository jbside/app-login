import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDefautLayoutComponent } from './login-defaut-layout.component';

describe('LoginDefautLayoutComponent', () => {
  let component: LoginDefautLayoutComponent;
  let fixture: ComponentFixture<LoginDefautLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDefautLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDefautLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
