import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';      //AuthService must be imported to inject DashboardComponent
import { UserService } from '../user.service';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  
  userListArray: string[] = ["Ronald Steele", "Nigel Walters", "Jase Sosa", "Casey Vazquez"]; //array with existing users 
  user: string;
  
  constructor(private authService: AuthService, private userService: UserService) {   //injecting AuthService into DashboardComponent 
  } 


  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (response) => console.log('response', response),
        (error) => console.log('error', error),
        ()=> console.log('completed')
    );
  }



  ngOnInit() {
    this.checkUser();                               //run function
  }

  checkUser():void{                                 //check if user is logged in
    this.user = this.authService.checkIfLoggedIn();
  }

  onUserNameAdded(userName: string) {           
    this.userListArray.push(userName)               //push user's name input into userListArray
  }      
  onUserNameDelete() {
    this.userListArray.pop()                        //remove the last element of userListArray
  }  
}