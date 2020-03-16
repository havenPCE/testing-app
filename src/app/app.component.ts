import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService : HttpService){}

  public registerMe() {

    const data = {
      "email" : "strikerallin1@gmail.com",
      "password" : "12345678",
      "first_name" : "Shyam",
      "last_name" : "Sahoo",
      "gender" : "male",
      "phone" : "9777944995"
    }

    this.httpService.post("/account/register-student", {}, data).subscribe(
      response => console.log(response),
      error => console.log(error)
    )

  }

  public authenticate() {

    const data = {
      "email" : "strikerallin1@fmail.com",
      "password" : "12345678",
      "role" : "tutor"
    }

    this.httpService.post("/account/authenticate", {}, data).subscribe(
      response => console.log(response),
      error => console.log(error)
    )

  }

}
