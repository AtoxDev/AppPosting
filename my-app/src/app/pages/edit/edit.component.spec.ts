import { ApiServiceService } from './../../ApiService/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { EditComponent } from './edit.component';
import { Observable } from 'rxjs';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let userService = {
    getData: () => {}
  }

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
      declarations: [ EditComponent ],
      imports: [
        HttpClientModule
      ],
      providers:
      [
        { provide: Router, useValue: 'value' },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        },
        { provide: ApiServiceService, useValue: userService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creando Test en editComponent', () => {
    expect(component).toBeTruthy();
  });
});
