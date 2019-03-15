import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../models/admin-login.model';   //import AdminLogin to use the datamodel
import { AdminFull } from '../models/admin-full.model';     //import AdminFull to use the datamodel

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userStatus: string;

  model: AdminLogin = new AdminLogin('','');                //creating a new AdminLogin object

  constructor(private authService: AuthService) {           //injecting AuthService into LoginComponent
  }
  
  ngOnInit() {
    this.checkStatus();                                     //run checkStatus() method
  }
  
  checkStatus():void {                                      //check if there is a user in localStorage, if there is, then user is online if not user is offline
    this.userStatus = this.authService.checkIfLoggedIn();
  }

  logoutUser(): void {                                      //run logout method from authService 
    this.authService.logout()
    this.checkStatus();
  }

  onSubmit() {
    for (let i = 0; i < this.authService.admins.length; i ++) {   //loop through all admins in auhtService
      if (this.model.email === this.authService.admins[i].email && this.model.password === this.authService.admins[i].password) { //see if user's input fields (email + password) matches admins email + password
        let stringifyModel = JSON.stringify(this.model);         //converts AdminLogin object into a JSON string
        this.authService.login(stringifyModel);                 //run login method from authService with the stringifyModel as a parameter        
      } 
    }
  }
}

/*
****************NOTES****************
*LoginComponent consist of a form where users can input their email and password. User cannot log in if email & password are not
similar to the email & password in authService.admins. User can also logout by clicking the logout button and thereby clearing LocalStorage. 
*************************************
*/