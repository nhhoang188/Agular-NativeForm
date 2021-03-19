import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from '../model/Books';

const API_URl = `http://localhost:3000`;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(API_URl + '/books');
  }

  getById(id: any): Observable<Books> {
    return this.httpClient.get<Books>(API_URl + '/books/' + `${id}`);
  }

  updateBook(id: number, books: Books): Observable<Books> {
    return this.httpClient.put<Books>(API_URl + '/books/' + `${id}`, books);
  }

  createBook(books: Books): Observable<Books> {
    return this.httpClient.post<Books>(API_URl + `/books`, books);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URl + '/books' + `/${id}`);
  }
}
