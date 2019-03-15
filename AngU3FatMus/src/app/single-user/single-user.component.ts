import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  
  userId: string;
  user;
  userInfo = [];

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
    this.userId = params.id;
   })
   this.getSpecificUser();
  }

  getSpecificUser() {
    this.userService.getSpecificUser(this.userId)
    .subscribe(
      (response) => { this.user = response; },
      (error) => console.log('error', error),
      () => console.log('completed')
    );
  }  
}

/*
****************NOTES****************
*SingleUserComponent displays a specific user from the list of names in UserListComponent. It displays the username, adress, street, zip
etc. depending on the ID of the user.  
*************************************
*/
