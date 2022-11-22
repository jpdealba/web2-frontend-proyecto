import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: any = []

  constructor( private authService: AuthService) { }

  getRole(): string {
    const token = localStorage.getItem("token")
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("method") == "email") {
        this.authService.getToken(token!).subscribe((data: any) => {
          if (data.status == "Token Not Valid") {
            this.authService.signOut()
          } else {
            this.authService.setUser(data)
            this.roles = data.roles
            this.authService.setIsLoggedIn(true)
          }
        },
          (error: any) => {
            this.authService.signOut()
          }
        )
      }
    }
    console.log(this.roles)
    return this.roles;
  }
}
