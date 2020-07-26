import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user;

  constructor(public http: HttpClient) {}

  authenticate(email, password): any {
    console.log(email, password);
    return this.http
      .post("http://localhost:8080/commerce/auth", {
        email,
        password,
      })
      .pipe(
        map((data) => {
          this.user = data;
          return data;
        })
      );
  }
}
