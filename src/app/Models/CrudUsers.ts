export class CrudUser{
    id : string = '';
    userName : string = '';
    name : string = ''; 
    password : string = '';
    constructor(id : string, userName: string, name: string, password: string){
        this.id = id;
        this.userName = userName;
        this.name  = name; 
        this.password = password;
    }
}