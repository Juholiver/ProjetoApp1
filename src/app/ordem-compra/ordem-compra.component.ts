import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario', {static: false} ) public formulario: NgForm | undefined

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {
    
  }
  public confirmarCompra(formulario: NgForm)  {
    console.log(this.formulario)
  }
}
