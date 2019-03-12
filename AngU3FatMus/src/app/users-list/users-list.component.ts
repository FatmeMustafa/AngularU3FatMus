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
