import {Component, OnInit} from '@angular/core';
import {BooksService} from '../service/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Books} from '../model/Books';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: any;
  createForm: any;

  constructor(private booksv: BooksService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    });
  }

  createBook() {
    const book: Books = this.createForm.value;
    this.booksv.createBook(book).subscribe(() => {
      alert('Thêm Sách Thành Công!');
      this.router.navigate(['books']);
    });
  }
}
