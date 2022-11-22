import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }



  crearUsuario() {
    const datos = this.signupForm.getRawValue();
    if (this.signupForm.valid) {
      this.authService.postUser(datos.email, datos.password, datos.name, "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png").subscribe(
        (res) => this.router.navigate(["login"]),
        (err) => console.log(err)
      )
    }
  }


}
