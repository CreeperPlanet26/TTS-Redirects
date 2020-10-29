import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HamburgerComponent } from './assets/icons/hamburger/hamburger.component';
import { MaterialModule } from './material.module';
import { CloseComponent } from './assets/icons/close/close.component';
import { LoginComponent } from './components/buttons/login/login.component';
import { JoinComponent } from './components/buttons/join/join.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HamburgerComponent,
    CloseComponent,
    LoginComponent,
    JoinComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
