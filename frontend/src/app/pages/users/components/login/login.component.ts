
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/share/interfaces/button';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: ElementRef;
  @ViewChild('signUpForm') signUpForm!: ElementRef;

  public loginAlert!: string;
  public signUpAlert: string = "";
  public securityLevel: number = 0;
  public colorLvl: string = "red";

  public login: Button = {
    label: 'Login',
    icon: 'settings_power',
    isBtnIcon: false
  };
  public signup: Button = {
    label: "S'inscrire",
    icon: 'settings_power',
    isBtnIcon: false
  };
  constructor(private readonly HttpService: HttpService,private readonly router: Router) { }
  public onLogginIn() {
    event?.preventDefault();
    if (!this.loginForm.nativeElement[0].value || !this.loginForm.nativeElement[1].value) {
      this.loginAlert = "Champs incompets"
    } else {
      let user: { email?: string, username?: string, password: string } = { password: this.loginForm.nativeElement[1].value };
      /.+\@.+\..+/.test(this.loginForm.nativeElement[0].value) ? user.email = this.loginForm.nativeElement[0].value : user.username = this.loginForm.nativeElement[0].value;

      this.HttpService.logIn(user).subscribe((data: any) => {
        for (let [key, value] of Object.entries(data)) {
          localStorage.setItem(key, value as string)
        }
        //TODO isAuth=true
        
        this.router.navigateByUrl(`/`);
      },
        error => {
          this.loginAlert = error.error.error
        })
    }

  }
  public passwordSecurity(event: any) {
    const passW: string = event.target.value;
    const conditions: boolean[] = [
      /[a-z]/.test(passW), //at least one lowercase
      passW.length >= 8, //at least 8 characters
      /[A-Z]/.test(passW), //at least one uppercase
      /[0-9]/.test(passW), //at least one number
      /[^A-Za-z0-9\ \w]/.test(passW) //at least one special character
    ]
    this.securityLevel = conditions.filter(w => w === true).length / 5;
    this.colorLvl = ["red", "orange", "green", "greenyellow"][Math.floor(this.securityLevel * 3)];
  }
  public onSignUp() {
    this.signUpAlert = "";
    event?.preventDefault();
    const user = { username: this.signUpForm.nativeElement[0].value, email: this.signUpForm.nativeElement[1].value, password: this.signUpForm.nativeElement[2].value }
    if (!user.username || !user.email || !user.password) {
      this.signUpAlert = 'Merci de complèter tous les champs.'
    } else if (!/.+\@.+\..+/.test(user.email)) {
      this.signUpAlert = 'Email invalide.'
    } else if (user.password.length < 6) {
      this.signUpAlert = 'Votre mot de passe doit contenir au moins 6 caractères.'
    } else {
      this.HttpService.signUp(user).subscribe((data: any) => {
        this.HttpService.logIn({ email: data.email, password: user.password }).subscribe((data: any) => {
          for (let [key, value] of Object.entries(data)) {
            localStorage.setItem(key, value as string)
          };
          //TODO isAuth=true
          this.router.navigateByUrl(`/`);
        },
          error => {console.error(error)
          })

      },
        error => {
          console.error(error);
          this.signUpAlert = error.error.error;
        })
    }
  }
  ngOnInit(): void {
  }

}
