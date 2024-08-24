import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authUserService } from '../Services/AuthUsers.service';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {


  myForm : FormGroup;
  constructor(private route: Router, private authUserService : authUserService) {
    this.myForm = new FormGroup({
      f_email : new FormControl(''),
      f_password : new FormControl('')
    });
   }

  ngOnInit(): void {
  }
  authorised: boolean = false;
  onSubmit(){
    console.log(this.myForm.value);
    console.log(this.myForm.value.f_email, this.myForm.value.f_password);
    // for(let i = 0; i < this.authUserService.getList().length; i++){
    //   if((this.authUserService.getList()[i].userName) == this.myForm.value.f_email && this.authUserService.getList()[i].password == this.myForm.value.f_password){
    //     // this.route.navigate(['/Products']); 
    //     this.authorised = true;
    //     return this.authorised; 
    //   }
    // }
    // return this.authorised;

    this.authUserService.authentication(String(this.myForm.value.f_email), String(this.myForm.value.f_password))
    // if((this.list.userName) == this.myForm.value.f_email && this.authUserService.getList().password == this.myForm.value.f_password){
      
    // }
    this.route.navigate(['/Products']);  
  }
}
