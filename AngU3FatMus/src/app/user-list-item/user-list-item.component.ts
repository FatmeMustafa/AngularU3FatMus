import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
    
  @Input() userList: string;      //recieves userListArray from UsersList component
  @Input() changeColor: boolean;  //recieves boolean values

  constructor() { }

  ngOnInit() {
  }

}

/*
****************NOTES****************
*UserListItemComponent is the individual user in the list element. In this component the names of the users and the boolean value
of the method changeColor is passed to it from its parent component with the keyword @Input(). 
*************************************
*/