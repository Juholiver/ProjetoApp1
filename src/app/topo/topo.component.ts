import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs'; 

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
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([]); 
        }
        return this.ofertasService.pesquisaOfertas(termo)
        
      })
    )  // retorno Oferta[]
    catchError((erro: any )=> {
      return of<Oferta[]>([])
    })
      
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
     
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
