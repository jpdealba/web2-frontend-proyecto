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
  socialUser!: SocialUser;

  constructor(private socialAuthService: SocialAuthService, private router: Router, public authService: AuthService) {

    socialAuthService.authState.subscribe(user => {
      if (user) {
        authService.setUser(user)
        authService.setIsLoggedIn(true)
        localStorage.setItem("method", "google")
        console.log("Usuario logueado", user);
        localStorage.setItem("token", user.idToken)
        var route = router.url == "/login" ? "/meme" : router.url
        router.navigate([`${route}`])
      } else {

      }
    })
  }
  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("method") == "email") {
        this.authService.getToken(token!).subscribe((data: any) => {
          if (data.status == "Token Not Valid") {
            this.authService.signOut()
          } else {
            this.authService.setUser(data)
            this.authService.setIsLoggedIn(true)
          }
        },
          (error: any) => {
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
    this.router.navigate(["meme"])
  }

}
