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
