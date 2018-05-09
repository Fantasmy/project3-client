import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> { // f on homepage
    const options = {
      withCredentials: true // the client will send cookies, because cors doesn't do it automatically
    };
    return this.httpClient.get(`${this.baseUrl}/events`, options)
      .toPromise();
  }

  getOne(id: string): Promise<any> { //f on detail and update pages
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/events/${id}`, options)
      .toPromise();
  }

  create(event): Promise<any> {  // f on create page
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/events`, event, options)
      .toPromise();
  }


  update(event): Promise<any> {  // f on update page
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/events/${event._id}`, event, options)
      .toPromise();
  }

  deletetOne(id: string): Promise<any> {  //f on detail page
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/events/${id}`, options)
      .toPromise();
  }

}
