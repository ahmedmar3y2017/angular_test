import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'app-product',
    templateUrl: 'app-product.component.html',
    styleUrls: ['app-product.component.scss']
})
export class AppProductComponent {
    constructor(private _router: Router){} 

    onBack(): void { 
       this._router.navigate(['/Inventory']); 
    } 
    onBackMain(): void { 
        this._router.navigate(['/']); 
     } 
}
