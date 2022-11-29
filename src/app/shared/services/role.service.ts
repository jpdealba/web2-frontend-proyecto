import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url = `${environment.apiUrl}`;
  constructor( private authService: AuthService, private http: HttpClient) { }

  getRoles(token: string) {
    return this.http.get(`${this.url}/api/login/${token}`)
  }
}
