import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComprarBoletosComponent } from './components/comprar-boletos/comprar-boletos.component';

const routes: Routes =[
    
    { path: 'inicio',             component: DashboardComponent },
    { path: 'lista',     component: ComprarBoletosComponent },
    { path: 'profile',             component: ProfileComponent },
    { path: 'component',     component: ComponentsComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', component:DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [
  ],
})
export class AppRoutingModule { }
