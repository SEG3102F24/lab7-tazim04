import { inject, Injectable } from '@angular/core';
import { Author } from 'src/app/books/model/book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(url + 'authors/' + id);
  }
}

// /authors/{id}
