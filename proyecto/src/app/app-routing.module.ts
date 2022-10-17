import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinComponent } from './pages/coin/coin.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:user_id', component: ProfileComponent },
  { path: 'coin/:id', component: CoinComponent },
  { path: 'fiat/:user_id', component: FiatComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
