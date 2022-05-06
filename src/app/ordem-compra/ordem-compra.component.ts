import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string =''

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string) : void{
    this.endereco = String (endereco)
    console.log(this.endereco)
  }
  public atualizaNumero(numero: string) : void{
    this.numero = String (numero)
    console.log(this.numero)
  }
  public atualizaComplemento(complemento: string) : void{
    this.complemento = String (complemento)
    console.log(this.complemento)
  }
  public atualizaFormaPagamento(formaPagamento: string) : void{
    this.formaPagamento = String (formaPagamento)
    console.log(this.formaPagamento)
  } 
  

}
