import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Models/api';
import { Book } from 'src/app/Models/Book';
import { product } from 'src/app/Models/product';
import { BooksService } from 'src/app/Services/books.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isHomeRoute : boolean = false;

  @Input()
  card!: product;

  @Input()
  ApiCard! : Api;
  @Output() cardSelected = new EventEmitter<Api>();

  // isHomeRoute: boolean = false;

  isHomeRoutePresent: boolean = false;
  isBookRoute : boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private productServ : ProductService, private bookServ : BooksService) { }

  ngOnInit(): void {
    this.isBookRoute = this.router.url.includes('/Book');
    this.isHomeRoute = this.router.url.includes('/Home');
    this.productServ.setRoute(this.isHomeRoute)

    // this.BookData()
  }

  HomeRouteState(){
    // this.isHomeRoutePresent = true
    // this.router.navigate(['/Products', this.ApiCard.id], {
    //   queryParams: { isHomeRoutePresent: true }
    // });
    console.log("this.isHomeRoute")
    console.log(this.ApiCard)
    this.cardSelected.emit(this.ApiCard)  
    this.productServ.setApiCard(this.ApiCard)
    console.log(this.cardSelected)
    // this.router.navigate(['/Home', this.ApiCard.id], { state: { ApiCard: this.ApiCard } });
    // this.router.navigate(['/Home', this.ApiCard.id])

    console.log("end.isHomeRoute")
    // this.isHomeRoute = true

  }

  // book : Book[] = [];
  // BookData(){
  //   this.bookServ.getAllBooks().subscribe((data)=>{
  //     this.book = data
  //   })
  // }

  @Input()
  book!: Book

}

