import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { catchError} from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 

@Injectable({         //service to fetch data
  providedIn: 'root'
})
export class UserService {
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users'   //saving JSON placeholder users url

  constructor(private http: HttpClient) {             //to use HttpClient it must be added to the constructor
  }

  public getUsers(): Observable<any>{                 //getting usersUrl from JSON
    return this.http.get(this.usersUrl)
  }

  public getSpecificUser(id: any): Observable<any>{   //getting specific users url by ID
    return this.http.get(this.usersUrl + "/" + id) 
  }
}
