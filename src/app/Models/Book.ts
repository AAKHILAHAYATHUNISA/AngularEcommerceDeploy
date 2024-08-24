export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Book[];
  }

export class Book{
    id: number;
    title: string;
    authors: Author[];
    languages: string[];
    constructor(id: number, title: string, authors: Author[], languages: string[]){
        this.id = id;
        this.title = title;
        this.authors = authors
        this.languages = languages
    }
}

export class Author {
    name: string;
    // age : number

    constructor( name: string){
        this.name = name;
        // this.age = age;
    }
    
}