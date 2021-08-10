import { Component, OnInit } from '@angular/core';
import { Producto } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Producto[] = [
    {
      precio: 500,
      id_tipo: "Carne de cerdo",
      nombre: "lomo"
    },
    {
      precio: 400,
      id_tipo: "Carne de vaca",
      nombre: "matambre"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
