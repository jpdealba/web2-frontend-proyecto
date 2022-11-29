import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  url = `${environment.apiUrl}/api/coins`;
  symbol: string = ""
  coins: Array<any> = []
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

  async getCoins() {
    const resp = await axios.get(this.url);
    this.coins = resp.data
    return resp;
  }

  getCoin(symbol: string) {
    return axios.get(`${this.url}/${symbol}`);
  }

  setSymbol(symbol: string) {
    this.symbol = symbol;
  }

  getSymbol() {
    return this.symbol;
  }




}
