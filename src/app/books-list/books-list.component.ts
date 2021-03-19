import {Component, OnInit} from '@angular/core';
import {BooksService} from '../service/books.service';
import {Books} from '../model/Books';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  book?: any;

  constructor(private booksv: BooksService) {
  }

  ngOnInit(): void {
    this.booksv.getAll().subscribe(value => {
      console.log(value);
      this.book = value;
    }, error => {
      console.log(error);
    });
  }



}
