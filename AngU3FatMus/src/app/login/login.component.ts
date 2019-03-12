import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginInput: string; 
  userStatus: string;

  constructor(private authService: AuthService) { //injecting AuthService into LoginComponent
  }
  
  ngOnInit() {
    this.checkStatus();
  }
  
  checkStatus():void {                            //check if there is a user in localStorage
    this.userStatus = this.authService.checkIfLoggedIn();
  }

  loginUser(): void {  
    this.authService.login(this.userLoginInput)   //run login method from authService with userLoginInput as a parameter
  }

  logoutUser(): void {                            //run logout method from authService 
    this.authService.logout()
    this.checkStatus();
  }
}
