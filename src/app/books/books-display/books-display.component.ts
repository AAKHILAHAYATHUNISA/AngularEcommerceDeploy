import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.scss']
})
export class BooksDisplayComponent implements OnInit {

  @Input()
  bookindex! : number
  @Input()
  BookCard!: Book;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.BookCard)


    // this.BookCard.authors(author => {
    //   console.log(`Author: ${author.name}`);
    // });




  }

}
