import {Component, Input, OnInit} from '@angular/core';
import {Books} from '../model/Books';
import {BooksService} from '../service/books.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
 book: any;

  constructor(private booksv: BooksService,
              private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      const id = value.get('id');
      this.booksv.getById(id).subscribe(value1 => {
        this.book = value1;
        console.log(value1);
      }, error => {
        console.log(error);
      });
    });
  }

}
