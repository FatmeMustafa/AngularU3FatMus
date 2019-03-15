import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() userList: string[];

  changeColor: boolean = true;            //changeColor is set to true 
  
  onToggle() {
    this.changeColor = !this.changeColor; //when BTN toggle is clicked -> change changeColor to false and based on the values change color (user-list-item.component.html)
  }

  constructor() { }

  ngOnInit() {
  }
}

/*
****************NOTES****************
*UsersListComponent consist of the ul element with all the users including the toggle button. This component recieves the userListArray
as an input from its parent component. And it sends the boolean value of changeColor and the userName to its own childcomponent (userListItem).
*************************************
*/