import {HttpClient} from '@angular/common/http'
import { environment } from 'environments/environment'
import { Observable } from 'rxjs'

import { Injectable } from '@angular/core';
import { BoletoDto, BoletoDtoo } from 'app/interfaces/boleto';


@Injectable({
    providedIn: "root"
})

export class BoletoService {

    private endPoint: string = environment.endPoint;
    private apiURL: string = this.endPoint + "Boleto/"

    constructor(private http: HttpClient) {}

    getList(sorteoId: number): Observable<BoletoDto[]> {
        return this.http.get<BoletoDto[]>(`${this.apiURL}ObtenerLista?sorteoId=` + sorteoId)
    }

    getListPayed(sorteoId: number): Observable<BoletoDto[]> {
        return this.http.get<BoletoDto[]>(`${this.apiURL}ObtenerListaPagados?sorteoId=` + sorteoId)
    }

    getListDebt(sorteoId: number): Observable<BoletoDto[]> {
        return this.http.get<BoletoDto[]>(`${this.apiURL}ObtenerListaPendientes?sorteoId=` + sorteoId)
    }

    getListAvailable(sorteoId: number): Observable<BoletoDto[]> {
        return this.http.get<BoletoDto[]>(`${this.apiURL}ObtenerListaDisponibles?sorteoId=` + sorteoId);;
    }

    getBoleto(sorteoId: number, numBoleto: number): Observable<BoletoDto> {
        return this.http.get<BoletoDto>(`${this.apiURL}ObtenerLista?sorteoId=` + sorteoId +`&numBoleto=`+numBoleto)
    }

    reserveBoletos(model: BoletoDto): Observable<BoletoDto> {
        return this.http.post<BoletoDto>(`${this.apiURL}ReservarBoletos`, model)
    }

    payBoletos(model: BoletoDto): Observable<BoletoDto> {
        return this.http.post<BoletoDto>(`${this.apiURL}PagarBoletos`, model)
    }

    releaseBoletos(model: BoletoDto): Observable<BoletoDto> {
        return this.http.post<BoletoDto>(`${this.apiURL}LiberarBoletos`, model)
    }
}