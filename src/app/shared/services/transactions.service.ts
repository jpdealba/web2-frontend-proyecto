import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  url = `${environment.apiUrl}/api/transactions`;
  symbol: string = ""
  private httpOptions = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  private httpOptionsClient = {
    headers: new HttpHeaders(this.httpOptions)
  }
  coinsList: Array<any> = []
  constructor(private httpClient: HttpClient) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  postTransaction(data: any) {
    return axios.post(this.url, data)
  }

  async getTransactions(symbol: string) {
     return axios.get(`${this.url}/${symbol}`);
  }

  async getTransactionsUser(user_id: string) {
     return axios.get(`${this.url}/user/${user_id}`);
  }


}
