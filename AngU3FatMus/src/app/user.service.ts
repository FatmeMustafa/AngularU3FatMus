import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { catchError} from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<any>{
    return this.http.get(this.usersUrl)
  }

  public getSpecificUser(id: any): Observable<any>{
    return this.http.get(this.usersUrl + "/" + id) //was without /
  }
}
