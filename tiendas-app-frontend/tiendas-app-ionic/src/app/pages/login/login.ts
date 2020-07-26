import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserData } from "../../providers/user-data";

import { UserOptions } from "../../interfaces/user-options";
import { AuthService } from "../../providers/auth/auth.service";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage {
  login = {};
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private authService: AuthService
  ) {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log(form.value);
      this.authService
        .authenticate(form.value.email, form.value.password)
        .subscribe(
          (user) => {
            console.log(user);
          },
          (error) => {
            console.log(error);
          }
        );
      // this.router.navigateByUrl("/commerce-products");
    }
  }
}
