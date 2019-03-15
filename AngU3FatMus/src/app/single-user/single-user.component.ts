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

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.userId = params.id;
   })

   this.getSpecificUser();
  }

  getSpecificUser() {
    this.userService.getSpecificUser(this.userId).subscribe(
      (response) => {
      this.user = response;
      
        console.log(response);
   /*
     const userInfoArry = [];
      userInfoArry.push({
      username: response.username,
      name: response.name,
      city: response.address.city,
      street: response.address.street,
      zipcode: response.address.zipcode
      });
      this.userInfo = userInfoArry;
      console.log("this.userInfo", this.userInfo);
      return this.userInfo;*/
      },
      (error) => //console.log('error', error),
      () => console.log('completed')
      );
      }

    
}
