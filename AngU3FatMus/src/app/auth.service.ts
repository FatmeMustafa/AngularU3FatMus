import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';

@Injectable({     //service to check login status, log users out and in
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string; 

  constructor() { }

  checkIfLoggedIn(){                          
    return localStorage.getItem('user');      //control if user is logged in by getting the value of user in localStorage
  }

  public login(user: string) {  
    localStorage.setItem('user', user);       //set key to user and value to user's login input (userLoginInput) in Local Storage when BTN in login.component is clicked
    this.loggedUser = user;
  }

  public logout() {
    localStorage.clear();                     //clears out local storage
    this.loggedUser = undefined;
  }

  public admins: AdminFull[] = [{             //creating AdminFull objects based on blueprint
    firstName: 'Fatme',
    lastName: 'Mustafa',
    email: 'fatme.mustafa@gmail.com',
    password: '1111111111'
    }, {
    firstName: 'Mustafa',
    lastName: 'Nazar',
    email: 'mustafa.nazar@gmail.com',
    password: '1111111111'
    }, {
    firstName: 'Ayah',
    lastName: 'Aljawashee',
    email: 'ayah.aljawashee@gmail.com',
    password: '1111111111'
  }];

}