import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { CrudUser } from '../Models/CrudUsers';
import { User } from '../Models/users';

@Component({
  selector: 'app-http-crud',
  templateUrl: './http-crud.component.html',
  styleUrls: ['./http-crud.component.scss']
})
export class HttpCrudComponent implements OnInit {

  MyFormGroup  = new FormGroup({
    Title : new FormControl(''),
    AuthorName : new FormControl(''),
    Description : new FormControl(''),
    price : new FormControl('')
  });
  constructor(http : HttpClient) {
    this.http = http;
   }

  ngOnInit(): void {
    this.get()
  }

  http : HttpClient

  obj : User | undefined;
  post(){
    this.http
    .post<User>("https://angularlearning-c2ee9-default-rtdb.firebaseio.com/tasks.json",{userName : 'user', name : 'user', password : 'user'})
    .subscribe(data=>{
      this.obj = data
      console.log(data.name, data.userName, data.password)  
    })
    console.log(this.obj?.name, this.obj?.userName, this.obj?.password)
  }

  list : CrudUser[] = [];
  // get(){
  //   this.http
  //   .get<{[key: string]: User}>("https://angularlearning-c2ee9-default-rtdb.firebaseio.com/tasks.json")
  //   .subscribe(data=>{
  //     console.log(data)
  //     // this.list = data
  //     this.list.push({...response[key], id: key});
  //     return this.list
  //   })

  // }
  get(){
    return this.http
          .get<{[key: string]: CrudUser}>("https://angularlearning-c2ee9-default-rtdb.firebaseio.com/tasks.json")
          .pipe(map((response)=>{
            // const arr : User[] = [];
            for(const key in response){
              if(response.hasOwnProperty(key)){
                this.list.push({...response[key], id: key});
              }
            }
            return this.list;
          }))
  }

  update(obj : User, index : number){
    this.http
    .put(`https://angularlearning-c2ee9-default-rtdb.firebaseio.com/tasks/${index}.json`, obj)
    .subscribe(data=>{
      console.log(data)  
    })
  }
  delete(index : number){
    this.http
    .delete(`https://angularlearning-c2ee9-default-rtdb.firebaseio.com/tasks/${index}.json`)
    .subscribe(data=>{
      console.log(data)  
    })
  }

}
