import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppProductComponent } from './app-product/app-product.component';
import { AppInventoryComponent } from './app-inventory/app-inventory.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Product', component: AppProductComponent },
  { path: 'Inventory', component: AppInventoryComponent },
];
@NgModule ({
  imports:      [ BrowserModule,HttpModule ,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent ,AppProductComponent ,AppInventoryComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
