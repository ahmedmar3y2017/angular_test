import { Component } from '@angular/core';
import { Router }  from '@angular/router';  


@Component({
    moduleId: module.id,
    selector: 'app-inventory',
    templateUrl: 'app-inventory.component.html',
    styleUrls: ['app-inventory.component.scss']
})
export class AppInventoryComponent {
    constructor(private _router: Router){} 

    onBack(): void { 
       this._router.navigate(['/Product']); 
    } 
    onBackMain(): void { 
        this._router.navigate(['/']); 
     } 
}
