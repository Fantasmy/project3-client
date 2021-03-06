import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BarService {

  private baseUrl = environment.apiUrl + '/bars';

  constructor(private httpClient: HttpClient) { }

  getOneBar(id: string): Promise<any> { // f on detail and update pages
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  update(bar): Promise<any> {  // f on update page
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/${bar._id}`, bar, options)
      .toPromise();
  }

  deletetOne(id: string): Promise<any> {  // f on detail page
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }

}
