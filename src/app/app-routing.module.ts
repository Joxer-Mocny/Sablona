import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/views/about/about.component';
import { ContactComponent } from './components/views/contact/contact.component';
import {HomeComponent} from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { ProductComponent } from './components/views/product/product.component';
import {AuthGuard} from "./helpers";
import {UploadProductComponent} from "@app/components/views/upload-product/upload-product.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product', component: ProductComponent},
  {path: 'upload-product', component: UploadProductComponent},
  {path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
