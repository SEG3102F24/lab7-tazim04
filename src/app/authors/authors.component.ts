import { Component } from '@angular/core';
import { AuthorComponent } from './author/author.component';
import { Author } from '../books/model/book';
import { ActivatedRoute, Router, Routes, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  submit(value: string): void {
    this.router
      .navigate(['./', value], { relativeTo: this.route })
      .then((r) => {});
  }
}
