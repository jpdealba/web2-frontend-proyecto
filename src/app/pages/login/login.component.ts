import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: UntypedFormGroup;

  constructor(private router: Router, private http: HttpClient,
    private authService: AuthService, private formBuilder: UntypedFormBuilder) {
      this.logInForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }



  ngOnInit(): void {

  }


  getUser(email: string, password: string) {
    const url = `http://192.168.100.59:4004/api/login`
    return this.http.post(url, {
      email: email,
      password: password
    })
  }

   logUsuario(): void{
    const datos = this.logInForm.getRawValue();
     if (this.logInForm.valid) {
      this.getUser(datos.email, datos.password).subscribe((data: any) => {
        if (data.token) {
          this.authService.setUser(data)
          this.authService.setIsLoggedIn(true)
          localStorage.setItem("method", "email")
          localStorage.setItem("token", data.token)
          this.router.navigate(["/"])
        }
      },
        (err) => console.log(err))

    }
  }

}
