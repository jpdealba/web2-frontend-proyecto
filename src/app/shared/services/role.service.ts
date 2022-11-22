import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( private authService: AuthService, private http: HttpClient) { }

  getRoles(token: string) {
    const url = `https://web2-api-proyecto.vercel.app/api/login/${token}`
    return this.http.get(url)
  }
}
