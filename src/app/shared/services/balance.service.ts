import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  url = `${environment.apiUrl}/api/balance`;
  constructor() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  getUserBalance(id: string) {
    return axios.get(`${this.url}/${id}`);
  }
}
