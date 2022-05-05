import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { debounceTime } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]> | undefined
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      switchMap((termo: string) => {
        console.log('requisição http para api:')
        return this.ofertasService.pesquisaOfertas(termo)
        
      })
    )  // retorno Oferta[]
    this.ofertas.subscribe((ofertas: Oferta[])=> console.log(ofertas))
      
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter:', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
     
  }

}
