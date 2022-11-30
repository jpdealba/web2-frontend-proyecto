import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MaterialModule } from './modules/material/material.module';
import { CoinComponent } from './pages/coin/coin.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { GeneratorPrivateComponent } from './pages/generator-private/generator-private.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NlToBrPipe } from './shared/pipes/nl-to-br.pipe';
import { FileUploadComponent } from './layout/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NlToBrPipe,
    SignupComponent,
    GeneratorComponent,
    ProfileComponent,
    LoginComponent,
    ForbiddenComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GeneratorPrivateComponent,
    CoinComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleId!,
            {oneTapEnabled: false}
          )
        }
      ],
      onError: (err) => {
        console.error("aqui", err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
