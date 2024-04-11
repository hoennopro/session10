class Book {
  private title: string;
  private author: string;
  private quantity: number;

  constructor(title: string, author: string, quantity: number = 1) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getQuantity(): number {
    return this.quantity;
  }

  increaseQuantity(): void {
    this.quantity++;
  }
}

class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    let existingBook = this.books.find(
      (b) =>
        b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor()
    );
    if (existingBook) {
      existingBook.increaseQuantity();
    } else {
      this.books.push(book);
    }
  }

  listBooks(): void {
    console.log("Danh sách các sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`Sách ${index + 1}:`);
      console.log("Tiêu đề:", book.getTitle());
      console.log("Tác giả:", book.getAuthor());
      console.log("Số lượng:", book.getQuantity());
      console.log("-----------------------");
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
library.addBook(book3);

library.listBooks();
