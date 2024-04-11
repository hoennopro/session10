class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    console.log("Danh sách các sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`Sách ${index + 1}:`);
      console.log("Tiêu đề:", book.getTitle());
      console.log("Tác giả:", book.getAuthor());
    });
  }
}

let book1 = new Book("huhu", "alo");
let book2 = new Book("hehe", "123");
let book3 = new Book("asd", "dsa");
let book4 = new Book("zxc", "cxz");
let book5 = new Book("123132", "321321");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();
