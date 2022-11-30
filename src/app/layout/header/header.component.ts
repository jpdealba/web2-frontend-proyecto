import { GoogleSigninButtonDirective, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = this.authService.getUser();
  user_id: any = localStorage.getItem("user_id")
  constructor(private socialAuthService: SocialAuthService, private router: Router, public authService: AuthService) {
    socialAuthService.authState.subscribe(user => {
      if (user) {
        authService.postUserGoogle(user).subscribe((data: any) => {
          authService.setUser({...data, token: user.idToken})
          authService.setIsLoggedIn(true)
          localStorage.setItem("method", "google")
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
