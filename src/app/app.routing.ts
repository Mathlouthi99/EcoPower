import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { AddCategoryComponent } from './examples/admin/add-category/add-category.component';
import { ListCategoryComponent } from './examples/admin/list-category/list-category.component';
import { AddProductComponent } from './examples/admin/add-product/add-product.component';
//import { ListProductComponent } from './examples/admin/list-product/list-product.component';
import { DashboardComponent } from './examples/admin/dashboard/dashboard.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    {path: 'add', component: AddProductComponent},
    {path: 'listProduct', component: ListProductComponent },
    {path: 'admin', component: DashboardComponent},
    {path: 'addCategory', component: AddCategoryComponent},
    {path: 'listCategory', component: ListCategoryComponent},

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
