import { Component, OnInit } from '@angular/core';
import {BooksService} from '../service/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  updateForm: any;
  book: any;
  constructor(private bookService: BooksService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });

    this.activatedRoute.paramMap.subscribe(value => {
      const id = value.get('id');
      this.bookService.getById(id).subscribe((result) => {
        this.book = result;
        this.updateForm.patchValue(this.book);
      });
    });
  }


  updateBook() {
    const book = this.updateForm.value;
    this.bookService.updateBook(this.book.id, book).subscribe();
    alert("Cập Nhật Thành Công!")
    this.router.navigate(['/books']);
  }

}
