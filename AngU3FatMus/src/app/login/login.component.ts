import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../models/admin-login.model';
import { AdminFull } from '../models/admin-full.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userStatus: string;

  model: AdminLogin = new AdminLogin('','');     //creating a new AdminLogin object

  constructor(private authService: AuthService) { //injecting AuthService into LoginComponent
  }
  
  ngOnInit() {
    this.checkStatus();
  }
  
  checkStatus():void {                            //check if there is a user in localStorage
    this.userStatus = this.authService.checkIfLoggedIn();
  }

  logoutUser(): void {                            //run logout method from authService 
    this.authService.logout()
    this.checkStatus();
  }

  onSubmit() {
    for (let i = 0; i < this.authService.admins.length; i ++) { //loop through all admins in auhtService
      if (this.model.email === this.authService.admins[i].email && this.model.password === this.authService.admins[i].password) { //see if user's input fields (email + password) matches admins email + password
        let stringifyModel = JSON.stringify(this.model);         //converts AdminLogin object into a JSON string
        this.authService.login(stringifyModel);  //run login method from authService with the stringModel as a parameter        
      } 
    }
  }
}