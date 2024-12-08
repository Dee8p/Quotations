import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private apiUrl = 'http://localhost:3000/api/quotations';

  getQuotations(): Observable<any> {
    console.log(fetch(`${this.apiUrl}/`).then((response) => response.json()));
    return from(fetch(`${this.apiUrl}/`).then((response) => response.json()));
  }

  addQuotation(data: any): Observable<any> {
    return from(
      fetch(`${this.apiUrl}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((response) => response.json())
    );
  }

  editQuotation(id: string, data: any): Observable<any> {
    return from(
      fetch(`${this.apiUrl}/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((response) => response.json())
    );
  }

  deleteQuotation(id: string): Observable<any> {
    return from(
      fetch(`${this.apiUrl}/delete/${id}`, {
        method: 'DELETE',
      }).then((response) => response.json())
    );
  }
}
