import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppProductComponent } from './app-product/app-product.component';
import { AppInventoryComponent } from './app-inventory/app-inventory.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  
  { path: 'Product', component: AppProductComponent },
  { path: 'Inventory', component: AppInventoryComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule ({
  imports:      [ BrowserModule,HttpModule ,RouterModule.forRoot(appRoutes) , FormsModule],
  declarations: [ AppComponent ,AppProductComponent ,AppInventoryComponent ,NotFoundComponent , ShowProductComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
