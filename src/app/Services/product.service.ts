import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Api } from "../Models/api";
import { product } from "../Models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    // list: { id: number, name: string, desc: string }[] = [
      list: product[] = [
      { id: 1, name: "Alice", desc: "Wonderland" },
      { id: 2, name: "Bob", desc: "Builder" },
      { id: 3, name: "Charlie", desc: "Chocolate Factory" },
      { id: 4, name: "Daisy", desc: "Duck" },
      // { id: 5, name: "Edward", desc: "Elric" },
      // { id: 6, name: "Fiona", desc: "Fairy" },
      // { id: 7, name: "George", desc: "Gecko" },
      // { id: 8, name: "Hannah", desc: "Hawk" },
      // { id: 9, name: "Igor", desc: "Ice Cream" },
      // { id: 10, name: "Julia", desc: "Jellybean" }
    ]
    


    // getAllProducts(): product[] {
    //   return this.list;
    // }

    getAllProducts(): Observable<product[]> {
      return of(this.list);
    }

    getAddProducts(f_id:number, f_name: string, f_desc: string ){
      this.list.push({id : f_id, name : f_name, desc : f_desc });
    }

    card : Api | undefined
    setApiCard(card :Api){
      this.card = card;
    }
    getApiCard(){
      return this.card;
    }

    route : boolean = false;
    setRoute(route : boolean){
      this.route = route;
    }

    getRoute(){
      return this.route;
    }
}
