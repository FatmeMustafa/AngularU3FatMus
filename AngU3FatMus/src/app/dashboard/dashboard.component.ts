import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';      //AuthService is imported to inject the service to DashboardComponent
import { UserService } from '../user.service';      //UserService is imported to inject the service to DashboardComponent  

@Component({                                        
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  
  user: string;
  userListArray = [];
    
  constructor(
    private authService: AuthService, 
    private userService: UserService
  ) { }                                             //injecting AuthService & UserService into DashboardComponent 
 
  ngOnInit() {
    this.checkUser();                               //run checkUser function
  
    this.userService.getUsers()
      .subscribe(
      (response) => { this.userListArray = response; },   //set userListArray to response (JSON data)
      (error) => { console.log('error', error) },         //if fetch fails console log error
      ()=> console.log('completed')
    );
  }

  checkUser(): void {                               //check if user is logged in or offline
    this.user = this.authService.checkIfLoggedIn();
  }

  onUserNameAdded(userName: string) {               //add user's name input into userListArray           
    this.userListArray.push(userName)               
  }      

  onUserNameDelete() {                              //remove the last element of userListArray
    this.userListArray.pop()                        
  }  
}

/*
****************NOTES****************
*DashboardComponent consist of an array of users (userListArray) which includes users data fetched from JSON Placeholder, a method
which checks the users status and two other methods, which add and remove users from the userListArray. 
*************************************
*/