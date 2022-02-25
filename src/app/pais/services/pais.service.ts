import { Country } from './../interfaces/pais-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,population,alpha2Code,flag');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const url = `${ this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url, {params: this.httpParams});
  }

  bucarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{

    
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap( console.log))
  }


}
