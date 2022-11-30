
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;
  private loggedIn: boolean = false;
  onUser: EventEmitter<void> = new EventEmitter();
  url = `${environment.apiUrl}`;
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
            localStorage.setItem("user_id", data._id)
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
    return this.http.get(`${this.url}/google/${token}`)
  }

  getToken(token: string) {

    return this.http.get(`${this.url}/api/login/${token}`)
  }

  signOut(): void {
    localStorage.setItem("token", "")
    localStorage.setItem("method", "")
    localStorage.setItem("user_id", "")
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
    this.user = { ...user, photo_url: user.photo_url.includes("https://") ? user.photo_url : this.url + "/api/users/image/" + user._id }
    localStorage.setItem("user_id", user._id)

  }

  getUser(): any {
      return this.user
  }

  postUser(email: string, password: any, name: string, photo_url = "", method = "email") {
    return this.http.post(`${this.url}/api/users`, {
      name: name,
      username: name,
      photo_url: photo_url,
      email: email,
      password: password,
      method: method
    })
  }

}
