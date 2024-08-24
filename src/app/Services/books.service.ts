import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse, Book } from "../Models/Book";

@Injectable({
    providedIn: 'root'
})
export class BooksService{

    data : Book[] = [];
    http : HttpClient
    constructor(http : HttpClient){
        this.http = http;
    }
    getAllBooks() : Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://gutendex.com/books')
        // let limit = 'en';
        // let limit=language
        // // let params = new HttpParams().set('_limit', limit.toString());
        // let params = new HttpParams().set('languages', limit);
        // return this.http.get<ApiResponse>('http://gutendex.com/books', {params})
    }


    
}