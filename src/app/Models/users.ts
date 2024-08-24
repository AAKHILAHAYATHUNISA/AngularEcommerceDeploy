export class User{
    userName : string = '';
    name : string = ''; 
    password : string = '';
    constructor(userName: string, name: string, password: string){
        this.userName = userName;
        this.name  = name; 
        this.password = password;
    }
}