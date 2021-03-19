import { Component, OnInit } from '@angular/core';
import {BooksService} from '../service/books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: any;
  id: any;
  constructor(private booksv: BooksService,
              private activatedRoute: ActivatedRoute,
              private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.id = value.get('id');
      this.booksv.getById(this.id).subscribe(value1 => {
        this.book = value1;
        console.log(value1);
      }, error => {
        console.log(error);
      });
    });
  }
  delete() {
    this.booksv.deleteBook(this.id).subscribe(() => {
      alert('Delete Ok!');
      this.route.navigate(["books"])
    });
  }

}
