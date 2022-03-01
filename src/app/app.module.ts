import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { AboutComponent } from './components/views/about/about.component';
import { ProductComponent } from './components/views/product/product.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { HomeComponent } from './components/views/home/home.component';
import { TheFNavigationComponent } from './components/the-f-navigation/the-f-navigation.component';
import { LoginComponent } from './components/views/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";

import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {BasicAuthInterceptor} from "./helpers/basic-auth.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {fakeBackendProvider} from "./helpers/fake-backend";
import { UploadProductComponent } from './components/views/upload-product/upload-product.component';





@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    TheFNavigationComponent,
    UploadProductComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
