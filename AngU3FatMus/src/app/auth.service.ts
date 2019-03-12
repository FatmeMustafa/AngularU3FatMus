import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string; 

  constructor() { }

  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }

  public login(user: string) {  
    if (user.length >= 10 && /\d/.test(user)) {   //user name must be at least 10 characters and contain at least 1 number
      localStorage.setItem('user', user);         //set key to user and value to user's login input (userLoginInput) in Local Storage when BTN in login.component is clicked
    } else {
      alert("sorry, your username must be at least 10 characters and contain at least 1 number"); //HELP ROBIN! HOW CAN I ADD THIS TEXT TO HTML WITH STRING INTERPOLATION
    }
  }

  public logout() {
    localStorage.clear();                       //clears out local storage
    this.loggedUser = undefined;
  }
}

