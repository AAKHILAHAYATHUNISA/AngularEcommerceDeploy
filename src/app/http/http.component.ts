import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Crud } from '../Models/Crud';
import { CRUDService } from '../Services/CRUD.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  List : Crud[] = [];
  getList(){
    this.List = this.curdService.list
    return this.List;
  }
  MyFormGroup  = new FormGroup({
    Title : new FormControl(''),
    AuthorName : new FormControl(''),
    Description : new FormControl(''),
    price : new FormControl('')
  });
  curdService:CRUDService = inject(CRUDService);
  // Myhttp : HttpClient;
  constructor(http : HttpClient) { 
    // this.Myhttp = http;
  }

  ngOnInit(): void {
    // this.getList()
  }

  
  onSubmit(){
    let Title = String(this.MyFormGroup.value.Title)
    let AuthorName = String(this.MyFormGroup.value.AuthorName)
    let Description = String(this.MyFormGroup.value.Description)
    let Price = String(this.MyFormGroup.value.price)

    this.curdService.addserv(Title, AuthorName, Description, Price);

    this.MyFormGroup.reset();
    // let obj = this.MyFormGroup.value;
    // console.log(obj);
    // this.curdService.addserv(obj)
  }

  updateBtn : boolean = false;
  currObj!: Crud;
  update(obj  : Crud){
    this.updateBtn = true;
    console.log("Update");
    console.log(obj);

    this.MyFormGroup.patchValue(obj);
    // console.log(String(this.MyFormGroup.value.Title), String(this.MyFormGroup.value.AuthorName), String(this.MyFormGroup.value.Description), String(this.MyFormGroup.value.price))
    this.currObj = obj;  
  }
  updateCall(){
    let Title = String(this.MyFormGroup.value.Title)
    let AuthorName = String(this.MyFormGroup.value.AuthorName)
    let Description = String(this.MyFormGroup.value.Description)
    let Price = String(this.MyFormGroup.value.price)
    this.MyFormGroup.reset();
    this.updateBtn = false;
    this.curdService.updateserv(this.currObj.id, Title, AuthorName, Description, Price);
  }

  delete(id : number){
      console.log("Delete");
      console.log(id);
      this.curdService.delServ(id);
  }

}
