import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SantuaryMapComponent } from "./santuary-map/santuary-map.component";
import { LoginComponent } from "./landing/login/login.component";
import { CallbackComponent } from "./landing/callback/callback.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: LoginComponent },
  { path: 'login', component: LoginComponent },      // FIX: added /login route (AuthGuard redirects here)
  { path: 'oauth-success', component: CallbackComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
