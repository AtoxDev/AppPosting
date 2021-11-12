import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../ApiService/api-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public error: any;
  public errorClass: any;
  public capa: any;
  public listPost = [];
  public listComments = [];
  public idUser : any;
  public titlepost : any;
  public animation : any;

  constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router) {
    this.errorClass = '';
    this.capa = '';
    this.error = {
      title : '',
      message : '',
      btn: ''
    }
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.idUser = params['idUser'];
      this.getPosts(this.idUser);
    });
  }

  public getPosts(id: string) {
    this.api.getPosts(this.idUser).subscribe({
      next: (res: any) => {
        this.listPost = res.body;
      },
      error: (err) => {
        this.capa = 'capa';
        this.errorClass = 'animation-modal-error';
        this.error.title = 'Oops';
        this.error.message = 'Ha ocurrido un error a la hora de devolver los datos';
        this.error.btn = 'OK';
      }
    });
  }

  public seeComments(post: any) {
    this.titlepost = post.title;
    this.getComments(post.id);
    this.capa = 'capa';
    this.animation = 'animation-modal-comments';
  }

  public getComments(id: string) {
    this.api.getComments(this.idUser).subscribe({
      next: (res: any) => {
        this.listComments = res.body;
      },
      error: (err) => {
        this.capa = 'capa';
        this.errorClass = 'animation-modal-error';
        this.error.title = 'Oops';
        this.error.message = 'Ha ocurrido un error a la hora de devolver los datos';
        this.error.btn = 'OK';
      }
    });
  }

  public close() {
    this.errorClass = '';
    this.capa = '';
    this.animation = '';
  }

  public editPost(post: any) {
    this.router.navigate(['/edit-post'], { queryParams: {
      'idUser': this.idUser,
      'idPost': post.id } });
  }

  public createPost() {
    this.router.navigate(['/create-new-post'], { queryParams: {
        'idUser': this.idUser} });
  }

  public back() {
    this.router.navigate(['/users']);
  }

}
