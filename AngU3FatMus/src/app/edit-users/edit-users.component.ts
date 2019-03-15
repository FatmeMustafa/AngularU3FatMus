import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  //styleUrls: ['./edit-users.component.css']           //to write inline CSS this array is erased with the styles array
  styles: [`
    .editUser {
      background-color: rgb(228, 228, 228);
      padding: 25px;
      border-radius: 10px;
    }  
    input {
      margin-bottom: 5px;
    }
    button {
      margin-right: 5px;
    }
  `]                                                    //adding inline CSS
})

export class EditUsersComponent implements OnInit {

  @Output() userCreated = new EventEmitter<string>();   //the event will be emitted (send) to the parent component (DashboardComponent) 
  @Output() userDeleted = new EventEmitter<string>();  

  userNameInput = '';       

  constructor() { }

  ngOnInit() {
  }

 onAddUserName() {      
    this.userCreated.emit(this.userNameInput);          //emits the event containing the value of userNameInput
  }
  
  onRemoveUserName() {
    this.userDeleted.emit();                            //emits the event                       
  }
}

/*
****************NOTES****************
*EditUsersComponent consist of a form where users can add a username (userNameInput) and remove the last user element from 
the userListArray in the parent component. All the data is emitted or send through eventemitters.s 
*************************************
*/