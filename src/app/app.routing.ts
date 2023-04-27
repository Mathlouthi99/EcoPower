import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { ListCategoryComponent } from './examples/admin/list-category/list-category.component';
//import { ListProductComponent } from './examples/admin/list-product/list-product.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ListProductComponent } from './examples/admin/list-product/list-product.component';
import { ProductsComponent } from './examples/shop/products/products.component';
import { ProductbycatComponent } from './examples/shop/productbycat/productbycat.component';
import { DashboardComponent } from './examples/admin/dashboard/dashboard.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    {path: 'listProduct', component: ListProductComponent },
    {path: 'listCategory', component: ListCategoryComponent},
    {path: 'products', component: ProductsComponent },
    {path: 'listProduct/:id', component: ProductbycatComponent },
    {path: 'shop', component: ProductsComponent },
    {path: 'dashboard', component: DashboardComponent }



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
