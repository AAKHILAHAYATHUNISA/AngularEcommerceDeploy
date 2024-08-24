import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  log : boolean = false;
  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  LoginState(): boolean {
    // return this.user.logVar.subscribe(prp=>{

    // })
    this.user.logState.subscribe(prop=>{
      this.log = prop
      console.log(prop, this.log);
    })
    // this.log = this.user.logVar
    return this.log
  }

}
