import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone component
  imports: [FormsModule, NgIf], // ✅ Add FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  code: string = '';
  review: string = '';

  constructor(private http: HttpClient) {}

  submitCode() {
    this.http
      .post<{ review: string }>('http://localhost:5000/review-code', {
        code: this.code,
      })
      .subscribe(
        (response) => {
          this.review = response.review;
        },
        (error) => {
          this.review = 'Error fetching AI review.';
        }
      );
  }
}
