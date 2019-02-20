import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApisComponent } from './apis/apis.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
	{path:'login',component:LoginComponent},
	{path:'home',component:HomeComponent},
	{path:'about',component:AboutComponent},
	{path:'apis',component:ApisComponent},
	{path:'adduser',component:AdduserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ApisComponent,
    AdduserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
