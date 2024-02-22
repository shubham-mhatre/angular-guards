import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  public users:any[]=[];
  public errorMessage:string="Loading . . .";

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
    },(error)=>{
      console.log(error);
      this.errorMessage="Internal issue while making api call " + error.message;
    });
  }

  



}
