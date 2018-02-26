import { Component } from '@angular/core';
import { product } from '../ProductTest';

@Component({
    moduleId: module.id,
    selector: 'show-product',
    templateUrl: 'show-product.component.html',
    styleUrls: ['show-product.component.scss']
})
export class ShowProductComponent {
    model = new product(1, "product1");
}
