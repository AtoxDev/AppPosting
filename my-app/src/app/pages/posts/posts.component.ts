import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../ApiService/api-service.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public listPost = [];

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: (res: any) => {
        this.listPost = res.body;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public detail(posts: any) {
    console.log(posts);
  }

}
