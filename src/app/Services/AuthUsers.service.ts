import { Injectable } from "@angular/core";
import { User } from "../Models/users";

@Injectable({
    providedIn : 'root'
})
export class authUserService{

    Authusers : User[] = [
        {userName : 'admin1', name : 'admin1', password : 'admin1'},
        {userName : 'admin2', name : 'admin2', password : 'admin2'},
        {userName : 'admin3', name : 'admin3', password : 'admin3'}
    ]

    getList(): User[]{
        return this.Authusers;
    }

    authorised: boolean = false;
    authentication(name : string, pwd : string){
        if(this.Authusers.find(user => user.userName === name && user.password === pwd)){
            alert("User is authenticated");
            return this.authorised = true;
        }
        alert("User is unauthenticated");
        return this.authorised;
    }
    auth(){
        return this.authorised;
    }
}