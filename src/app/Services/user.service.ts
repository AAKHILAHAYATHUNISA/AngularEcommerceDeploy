import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../Models/users";

@Injectable({
    providedIn : 'root'
})
export class UserService{
    users : User[] = [
        {userName : 'admin', name : 'admin', password : 'admin'},
        {userName : 'user', name : 'user', password : 'user'}
    ]
    data : any
    http : HttpClient
    constructor(http : HttpClient){
        this.http = http;
    }
    // logVar : boolean = false;
    // logState: Observable<boolean> = this.logVar.asObservable();
    
    private logVar = new BehaviorSubject<boolean>(false);
    logState: Observable<boolean> = this.logVar.asObservable();

    isAuthenticatedUser(name : string, pwd  :string){
        if(this.users.find(user => user.userName === name && user.password === pwd)){
            // this.logVar =  true
            this.logVar.next(true)
            alert("user is authenticated");
            // this.logState(true)
            // return true;
            return
        }
        this.logVar.next(false)
        // this.logVar =  false
        alert("user is unauthenticated");
        this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({
            body : name,
            title  :pwd,
            userId : 1
          }))
          .subscribe(data=>{
            this.data = data;
            alert(JSON.stringify(this.data));
          })
        // this.logState(false)
        // return false
    }

    // logState() : Observable<boolean> {
    //     return this.logVar
    // }
}