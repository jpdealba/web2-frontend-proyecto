import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { GeneratorPrivateComponent } from './pages/generator-private/generator-private.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'meme', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
  { path: 'meme', component: GeneratorComponent, canActivate: [AuthGuard] },
  { path: 'private', component: GeneratorPrivateComponent, canActivate: [RoleGuard], data: {roles: ["admin"]} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
