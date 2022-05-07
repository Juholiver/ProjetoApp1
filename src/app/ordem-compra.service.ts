import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Pedido } from "./shared/pedido.model"
import { Observable, map } from "rxjs"

import { URL_API } from "./app.api"

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}


    public efetivarCompra(pedido: Pedido): Observable<any> {
         return this.http.post(
            "http://localhost:3000/pedidos",
            pedido
            ).pipe(map((response: any ) => {
                console.log(response)
            }))
    }
}