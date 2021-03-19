import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [
  {path: 'books', component: BooksListComponent, pathMatch: 'full'},
  {path: 'books/:id', component: BookDetailComponent, pathMatch: 'full'},
  {path: 'update/:id', component: BookUpdateComponent, pathMatch: 'full'},
  {path: 'create', component: BookCreateComponent, pathMatch: 'full'},
  {path: 'delete/:id', component: BookDeleteComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
