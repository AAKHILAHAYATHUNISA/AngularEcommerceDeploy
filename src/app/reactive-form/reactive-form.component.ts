import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {
  MyFormGroup  = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });

  // @Output() 
  // isLoggedUser : boolean = false;

  constructor(private userServ : UserService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.MyFormGroup);
    console.log(this.MyFormGroup.value.userName, this.MyFormGroup.value.password);
    let u_name = String(this.MyFormGroup.value.userName)
    // this.isLoggedUser = this.userServ.isAuthenticatedUser(singUpForm.userName, singUpForm.value.password);
    this.userServ.isAuthenticatedUser(u_name, String(this.MyFormGroup.value.password));
  }

}
