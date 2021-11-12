import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../ApiService/api-service.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public error: any;
  public errorClass: any;
  public capa: any;
  public idUser : any;
  public idPost : any;
  public postEdit: any;
  public listPost: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiServiceService) {
    this.errorClass = '';
    this.capa = '';
    this.error = {
      title : '',
      message : '',
      btn: ''
    }
    this.postEdit = {
      title : '',
      body: ''
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idUser = params['idUser'];
      this.idPost = params['idPost'];
      this.getPosts(this.idUser);
    });
  }

  public getPosts(id: string) {
    this.api.getPostsbyId(this.idUser).subscribe({
      next: (res: any) => {
        this.postEdit.title = res.body.title;
        this.postEdit.body = res.body.body;

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

  public back() {
    this.router.navigate(['/posts'], { queryParams: {'idUser' : this.idUser} });
  }

  public savePost(postEdit : any) {
    const body = {
      id : this.idPost,
      title: postEdit.title,
      body: postEdit.body,
      userId: this.idUser
    }

    this.api.getEditPOSTbyID(body).subscribe({
      next: (res: any) => {
        this.capa = 'capa';
        this.errorClass = 'animation-modal-error';
        this.error.title = '¡GENIAL!';
        this.error.message = 'Sus cambios han sido guardados correctamente...NOTA: DEBIDO A QUE ES UNA API EXTERNA LOS CAMBIOS NO ' +
          'SE VERÁN REFLEJADOS. ';
        this.error.btn = 'OK';
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


  public ok() {
    this.errorClass = '';
    this.capa = '';
    this.router.navigate(['/posts'], { queryParams: {
        'idUser': this.idUser} });
  }

  public close() {
    this.errorClass = '';
    this.capa = '';
  }
}
