import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class OrderService{

    private OrderUrl = " http://localhost:8700/orders";

    constructor(private http: HttpClient) {}

    postOrder(order:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.OrderUrl,order)
    }
    updateOrder(id:string,status:string,date:string,bank:string):Observable<any>{
        let oid = id.split('_')[1]
        let data={
            status,
            date,
            bank
        }

        return this.http.patch<any[]>(`${this.OrderUrl}/${oid}`,data)
    }

    getOrder(email:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.OrderUrl}?email=${email}`)
    }
}