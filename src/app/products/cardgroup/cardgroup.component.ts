import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Models/product';
import { BooksService } from 'src/app/Services/books.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cardgroup',
  templateUrl: './cardgroup.component.html',
  styleUrls: ['./cardgroup.component.scss']
})
export class CardgroupComponent implements OnInit {
  // list: { id: number, name: string, desc: string }[] = [
  //   {id : 1, name: "helloo", desc: "hii"},
  //   {id : 2, name: "meee", desc: "youuu"},
  //   {id : 3, name: "helloo", desc: "hii"},
  //   {id : 4, name: "meee", desc: "youuu"},
  //   {id : 5, name: "helloo", desc: "hii"},
  //   {id : 6, name: "meee", desc: "youuu"},
  //   {id : 7, name: "helloo", desc: "hii"},
  //   {id : 8, name: "meee", desc: "youuu"},
  //   {id : 9, name: "helloo", desc: "hii"},
  //   {id : 10, name: "meee", desc: "youuu"}
  // ];

  list! : product[];
  

  isBookRoute : boolean = false;
  
  constructor(private router: Router, private productservice : ProductService, private bookServ : BooksService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(product=>{
      this.list = product;
    })

    
    this.isBookRoute = this.router.url.includes('/Book');

    // this.BookData()
  }


  // books : Book[] = [];
  // BookData(){
  //   this.bookServ.getAllBooks().subscribe((data)=>{
  //     this.books = data
  //     console.log(this.books)
  //   })
  // }

}
