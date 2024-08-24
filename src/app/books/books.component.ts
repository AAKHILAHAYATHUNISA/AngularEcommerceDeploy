import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../Models/Book';
import { BooksService } from '../Services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  titleControl = new FormControl();
  query = new FormControl();
  constructor(private bookServ : BooksService) { }

  ngOnInit(): void {
    // this.BookData()
    // this.titleControl.valueChanges.subscribe((value) => {
    //   this.tofilterTitles(value)
    // })
    // this.query.valueChanges.subscribe((value) => {
    //   this.tofilterTitles(value)
    // })

    let inputTitle ='';
    let inputLang = '';
    this.bookServ.getAllBooks().subscribe((data)=>{
      this.books = data.results
      this.newBooks = this.books;
      // console.log(this.books[0].authors)
      this.filteredTitles = this.books.map(book => book.title);
      this.filteredLanguages = Array.from(new Set(this.books.map(book => book.languages[0])));


      this.titleControl.valueChanges.subscribe((value) => {
        // this.tofilterTitles(value)
        inputTitle = value;
        this.tofilterTitles(inputTitle, inputLang)
      })
      this.query.valueChanges.subscribe((value) => {
        inputLang = value;
        // this.tofilterTitles(value)
        this.tofilterTitles(inputTitle, inputLang)
      })
    })
  }

  title : string = '';
  books : Book[] = [];

  filteredTitles : string[] = [];
  filteredLanguages : string[] = [];
  BookData(){
    console.log(this.query)
    this.bookServ.getAllBooks().subscribe((data)=>{
      this.books = data.results
      this.newBooks = this.books;
      // console.log(this.books[0].authors)
      this.filteredTitles = this.books.map(book => book.title);      
    })
  }

  newBooks : Book[] = [];
  tofilterTitles(searchQuery: string, searchLang : string): void {

    this.filteredTitles = [];
    this.filteredLanguages = [];
    for(let i=0; i<this.books.length; i++){
      if(this.books[i].title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())){
        this.filteredTitles.push(this.books[i].title)
      }
      if(this.books[i].languages[0].toLocaleLowerCase().includes(searchLang.toLocaleLowerCase())){
        if(!this.filteredLanguages.includes(this.books[i].languages[0])){
          this.filteredLanguages.push(this.books[i].languages[0])
        }
      }
    }
    this.newBooks = [];
    console.log(this.filteredTitles+'\n'+this.filteredLanguages) 
    for(let i=0; i<this.books.length; i++){
      for(let j=0; j<this.filteredLanguages.length; j++){
        for(let k=0; k<this.filteredTitles.length; k++){
          if((this.books[i].languages[0].toLocaleLowerCase() === this.filteredLanguages[j].toLocaleLowerCase())
            &&(this.books[i].title.toLocaleLowerCase() === this.filteredTitles[k].toLocaleLowerCase())){
              this.newBooks.push(this.books[i])
          }
        }
      }
    }
    if(this.newBooks.length === 0){
      // alert("No books found, enter a valid title or language")
      this.BookData()
    }
  }

  // newBooks : Book[] = [];
  // tofilterTitles(searchQuery: string): void {
  //   this.filteredTitles = []; 
  //   for(let i = 0; i < this.books.length; i++){
  //     if(this.books[i].title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())){
  //       this.filteredTitles.push(this.books[i].title)
  //     }
  //   }
  //   // console.log(this.filteredTitles)
  //   let count  = 0;
  //   this.newBooks = [];
  //   for(let i = 0; i < this.books.length; i++){
  //     if(this.books[i].title.toLocaleLowerCase() === this.filteredTitles[count].toLocaleLowerCase()){
  //       this.newBooks.push(this.books[i])
  //       console.log("Match : "+this.books[i].title.toLocaleLowerCase()+"  "+this.filteredTitles[count].toLocaleLowerCase())
  //       console.log(this.books[i])
  //       console.log(this.newBooks)
  //       count++;
  //     }
  //   }
  //   console.log(this.newBooks)
  //   console.log(this.books)
  //   // this.books = this.newBooks;
  //   console.log(this.books)
  //   if(this.newBooks.length === 0){
  //     this.BookData()
  //   }

  //   // if (searchQuery) {
  //   //   this.filteredBooks = this.books.filter(book =>
  //   //     book.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  //   //   );
  //   // } else {
  //   //   this.filteredBooks = this.books;  // Show all books if search query is empty
  //   // }
  // }

  onSubmit(form : any){
    console.log(form.value.title)
    // this.tofilterTitles(String(form.value.title))

    // this.tofilterTitles(String(form.value.title))
  }

}
