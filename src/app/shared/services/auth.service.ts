
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;
  private loggedIn: boolean = false;
  onUser: EventEmitter<void> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {
    this.loaduser()
  }


  loaduser() {
   const token = localStorage.getItem("token")
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("method") == "email") {
        this.getToken(token!).subscribe((data: any) => {
          if (data.status == "Token Not Valid") {
            this.signOut()
          } else {
            this.setUser(data)
            this.setIsLoggedIn(true)
            this.onUser.emit(data);
          }
        },
          (error: any) => {
            this.signOut()
          }
        )
      }
    }
  }

  getTokenGoogle(token: string) {
    const url = `https://web2-api-proyecto.vercel.app/google/${token}`
    return this.http.get(url)
  }

  getToken(token: string) {

    const url = `https://web2-api-proyecto.vercel.app/api/login/${token}`
    return this.http.get(url)
  }

  signOut(): void {
    localStorage.setItem("token", "")
    localStorage.setItem("method", "")
    this.setIsLoggedIn(false)
    this.router.navigate(["/login"])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token")
  }

  setIsLoggedIn(val: boolean): void {
    this.loggedIn = val;
  }

  setUser(user: any) {
    this.user = { ...user }

  }

  getUser(): any {
      return this.user
  }

  postUser(email: string, password: any, name: string, photo_url = "", method = "email") {
    const url = `https://web2-api-proyecto.vercel.app/api/users`
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
