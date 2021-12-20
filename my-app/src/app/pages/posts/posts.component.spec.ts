import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  class ActivatedRouteMock {
    queryParams = new Observable(observer => {
       const urlParams = {
          param1: 'some',
          param2: 'params'
       }
       observer.next(urlParams);
       observer.complete();
    });
 }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: Router, useValue: 'value' },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creando Test en postComponent', () => {
    expect(component).toBeTruthy();
  });
});
