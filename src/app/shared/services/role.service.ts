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

    const url = `http://192.168.100.59:4004/api/login/${token}`
    return this.http.get(url)
  }

  // getRole(): any {
  //   let roles: any;

  //   const token = localStorage.getItem("token")
  //   if (localStorage.getItem("token")) {
  //     if (localStorage.getItem("method") == "email") {
  //       return this.authService.getToken(token!).subscribe((data: any) => {
  //         if (data.status == "Token Not Valid") {
  //           this.authService.signOut()
  //         } else {
  //           this.authService.setUser(data)
  //           roles = data.roles
  //           this.authService.setIsLoggedIn(true)
  //         }
  //       },
  //         (error: any) => {
  //           this.authService.signOut()
  //         }
  //       )
  //     }
  //   }
  //   return roles;
  // }
}
