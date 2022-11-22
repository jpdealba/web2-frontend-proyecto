import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: any;
  loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router, private authService: SocialAuthService) { }

  getTokenGoogle(token: string) {
    const url = `http://192.168.100.59:4004/google/${token}`
    return this.http.get(url)
  }

  getToken(token: string) {

    const url = `http://192.168.100.59:4004/api/login/${token}`
    return this.http.get(url)
  }

  signOut(): void {
    localStorage.setItem("token", "")
    localStorage.setItem("method", "")
    this.authService.signOut();
    this.setIsLoggedIn(false)
    this.router.navigate(["/login"])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token")
  }

  setIsLoggedIn(val: boolean): void {
    this.loggedIn = val;
  }

  setUser(user: any): void {
    this.user = {...user}
  }

  getUser() {
    console.log(this.user)
    return this.user
  }

  postUser(email: string, password: any, name: string, photo_url = "", method = "email") {
    const url = `http://192.168.100.59:4004/api/users`
    return this.http.post(url, {
      name: name,
      username: name,
      photo_url: photo_url,
      email: email,
      password: password,
      method: method
    })
  }

}
