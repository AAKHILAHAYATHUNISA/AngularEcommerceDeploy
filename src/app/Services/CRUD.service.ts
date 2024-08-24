import { Injectable } from "@angular/core";
import { Crud } from "../Models/Crud";

@Injectable({
    providedIn: 'root'
})
export class CRUDService{

    list : Crud[] = [
        {
            id: 1,
            Title: 'Book Title 1',
            AuthorName: 'Author 1',
            Description: 'Description of the first book.',
            price: "19.99"
        },
        {
            id: 2,
            Title: 'Book Title 2',
            AuthorName: 'Author 2',
            Description: 'Description of the second book.',
            price: "29.99"
        },
        {
            id: 3,
            Title: 'Book Title 3',
            AuthorName: 'Author 3',
            Description: 'Description of the third book.',
            price: "39.99"
        }
    ];
    addserv(Title:string, AuthorName:string, Description:string, Price:string){
        this.list.push({id : this.list.length+1, Title : Title, AuthorName : AuthorName, Description : Description, price : Price });

        // let index=-1;
        // for(let i = 0; i < this.list.length; i++){
        //     if(this.list[i].Title==Title){
        //         index=this.list[i].id;
        //     }
        //     this.list.push({id : index, Title : Title, AuthorName : AuthorName, Description : Description, price : Price });
        // }
        // if(index==-1){
        //     this.list.push({id : this.list.length+1, Title : Title, AuthorName : AuthorName, Description : Description, price : Price });
        // }
    }

    // addserv(obj:Crud){
    //     this.list.push({id : this.list.length+1, Title : obj.Title, AuthorName : obj.AuthorName, Description : obj.Description, price : obj.price });
    // }

    // updateserv(obj : Crud){
    //     console.log(obj);
    //     let index = this.list.findIndex(x => x.id == obj.id);
    //     console.log(index);
    //     this.list[index] = obj;
    // }

    updateserv(id:number, Title:string, AuthorName:string, Description:string, Price:string){
        // let index = this.list.findIndex(x => x.Title == Title);
        let index = this.list.findIndex(x => x.id == id);
        this.list[index] = {id : index+1, Title : Title, AuthorName : AuthorName, Description : Description, price : Price };
    }

    delServ(id:number){
        this.list.splice(id, 1);
    }
}