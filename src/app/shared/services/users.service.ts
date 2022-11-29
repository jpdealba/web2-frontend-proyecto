import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = `${environment.apiUrl}/api/users`;
  constructor() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  getUser(id: string) {
    return axios.get(`${this.url}/${id}`);
  }
}
