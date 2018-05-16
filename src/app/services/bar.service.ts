import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BarService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getOneBar(id: string): Promise<any> { // f on detail and update pages
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/bars`, options)
      .toPromise();
  }

  update(bar): Promise<any> {  // f on update page
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/bars/${bar._id}`, bar, options)
      .toPromise();
  }

  deletetOne(id: string): Promise<any> {  // f on detail page
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/bars/${id}`, options)
      .toPromise();
  }

}
