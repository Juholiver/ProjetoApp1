import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string =''

  //controles de validação dos campos
  public enderecoValido: boolean | undefined
  public numeroValido: boolean | undefined
  public complementoValido: boolean | undefined
  public formaPagamentoValido: boolean | undefined

  //estados primitivos dos campos (pristine)

  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true  
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

//controlar botao corfirma compra

  public formEstado: string = 'disabled'


  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
    this.ordemCompraService.efetivarCompra()
  }


  public atualizaEndereco(endereco: string) : void{
    this.endereco = String (endereco)
    //console.log(this.endereco)

    this.enderecoEstadoPrimitivo = false


    //se a string for maior que 3
    if (this.endereco.length > 3){
      this.enderecoValido = true 
    } else {
      this.enderecoValido = false
    }

    this.habilitaForm()
  }
  public atualizaNumero(numero: string) : void{
    this.numero = String (numero)
    //console.log(this.numero)

    this.numeroEstadoPrimitivo = false


    if(this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }

    this.habilitaForm()
  }
  public atualizaComplemento(complemento: string) : void{
    this.complemento = String (complemento)
    //console.log(this.complemento)

    this.complementoEstadoPrimitivo =  false

    if(this.complemento.length > 0) {
      this.complementoValido = true
    }else{
      this.complementoValido = false
    }

    this.habilitaForm()
  }
  public atualizaFormaPagamento(formaPagamento: string) : void{
    this.formaPagamento = String (formaPagamento)
    console.log(this.formaPagamento)

    this.formaPagamentoEstadoPrimitivo = false

    if(this.formaPagamento.length > 0 ) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }

    this.habilitaForm()
  } 
  
  public habilitaForm(): void {
    if(this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true){
      this.formEstado = ''
    }else{
      this.formEstado = 'disabled'
    }
    
  }

}
