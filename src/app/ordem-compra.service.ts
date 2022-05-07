import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Pedido } from "./shared/pedido.model"
import { Observable, map } from "rxjs"

import { URL_API } from "./app.api"

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}


    public efetivarCompra(pedido: Pedido): Observable<number> {
         return this.http.post(
            `${URL_API}/pedidos`,
            pedido
            ).pipe(map((resposta: any ) => 
                resposta.id
            ))
    }
}