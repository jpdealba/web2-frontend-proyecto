import { GoogleSigninButtonDirective, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = this.authService.getUser();
  user_id: any = localStorage.getItem("user_id")
  constructor(private socialAuthService: SocialAuthService, private router: Router,
    public authService: AuthService, private socketService: SocketService) {
    socialAuthService.authState.subscribe(user => {
      if (user) {
        authService.postUserGoogle(user).subscribe((data: any) => {
          authService.setUser({...data, token: user.idToken})
          authService.setIsLoggedIn(true)
          localStorage.setItem("method", "google")
          // this.socketService.connect()
          console.log("Usuario logueado", data);
          localStorage.setItem("token", user.idToken)
          var route = router.url == "/login" ? "/home" : router.url
          router.navigate([`${route}`])
        }, (err: any) => console.log(err))

      }
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("method") == "email") {
        this.authService.getToken(token!).subscribe((data: any) => {
          if (data.status == "Token Not Valid") {
            localStorage.setItem("user_id", "")
            this.authService.signOut()
          } else {
            localStorage.setItem("user_id", data._id)
            // this.socketService.connect()
            this.authService.setUser(data)
            this.user = data
            this.authService.setIsLoggedIn(true)
          }
        },
          (error: any) => {
            localStorage.setItem("user_id", "")
            this.authService.signOut()
          }
        )
      } else {
        this.authService.getTokenGoogle(token!).subscribe((data: any) => {

          if (data.isvalid == false) {
            localStorage.setItem("user_id", "")
            this.authService.signOut()
          } else {
            localStorage.setItem("user_id", data._id)
            // this.socketService.connect()
            this.authService.setUser(data)
            this.user = data
            this.authService.setIsLoggedIn(true)
          }
        },
          (error: any) => {
            localStorage.setItem("user_id", "")
            this.authService.signOut()
          })
      }
    }
  }

  logOut() {
    this.authService.setUser({})
    localStorage.setItem("token", "")
    this.socialAuthService.signOut();
    this.authService.setIsLoggedIn(false)
    this.authService.signOut()
  }

  navigate() {
    this.router.navigate(["home"])
  }

}
