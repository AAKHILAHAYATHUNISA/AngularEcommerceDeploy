import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Api } from '../Models/api';

@Component({
  selector: 'app-http-table',
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.scss']
})
export class HttpTableComponent implements OnInit {

  MyFormGroup  = new FormGroup({
    postCount : new FormControl('')
  });
  Myhttp : HttpClient;
  constructor(http : HttpClient) {
    this.Myhttp = http;
  }

  disp_id : number=7;

  // Mydata!: Api;
  // item:Api | undefined
  count : number = 0;
  ngOnInit(): void {
    // this.count = Number(this.MyFormGroup.value.postCount)
    // this.getAllApiData()
    this.Myhttp
    .get<Api[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data=>{
      this.list = data;
      return this.list
    })
    // this.Myhttp
    // .get<Api>(`https://jsonplaceholder.typicode.com/posts/${this.disp_id}`)
    // .subscribe(data=>{
    //   console.log(this.item)
    //   this.item = data
    //   console.log(this.item)
    //   // return this.item
    // })
  }

  list : Api[] = [];
  getAllApiData(){
    this.count = Number(this.MyFormGroup.value.postCount)
    let params = new HttpParams().set('_limit', this.count);
    this.Myhttp
    // .get<Api[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // .get<Api[]>('https://jsonplaceholder.typicode.com/posts')
    // .get<Api[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${this.count}`)
    .get<Api[]>(`https://jsonplaceholder.typicode.com/posts`, {params})
    .subscribe(data=>{
      this.list = data
      // .map(item => ({
      //   userId: item.userId,
      //   id: item.id,
      //   title: item.title,
      //   name: item.body // Map body to name
      // }));
      return this.list
    })
  }

  // list! : Api;
  // getAllApiData(){
  //   this.Myhttp
  //   .get<Api>('https://jsonplaceholder.typicode.com/posts/1')
  //   .subscribe(data=>{
  //     this.list = data;
  //     return this.list
  //   })
  // }

}
