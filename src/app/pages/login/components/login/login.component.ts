import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ""
  password: string = ""
  constructor(private router: Router) {}

  /**
   * TODO UPDATE TO authenticate properly
   * @param loginForm
   */
  onFormSubmit(loginForm:any){
    localStorage.setItem("username", loginForm.value.username)
    localStorage.setItem("password", loginForm.value.password)
    this.router.navigate(["./dashboard/overview"]);
  }
}
