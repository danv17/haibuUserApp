import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: User;
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${API_URL}`);
  }

  filterUser(users: User[], searchTerm: string) {
    return users.filter((user) => {
      return user.nombreCompleto.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }
}
