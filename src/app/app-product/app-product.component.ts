import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../ProductTest';
@Component({
    moduleId: module.id,
    selector: 'app-product',
    templateUrl: 'app-product.component.html',
    styleUrls: ['app-product.component.scss']
})
export class AppProductComponent {

    constructor(private _router: Router) { }


    model = new product(1, "product1");
    onBack(): void {
        this._router.navigate(['/Inventory']);
    }
    onBackMain(): void {
        this._router.navigate(['/']);
    }
}
