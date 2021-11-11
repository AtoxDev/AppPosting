import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../ApiService/api-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public listUsers = [];

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (res: any) => {
        this.listUsers = res.body;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public detail(users: any) {
    console.log(users);
  }

}
