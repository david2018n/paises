import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  
  termino: string = '';
  hayerror:boolean = false;
  paises: Country[] = [];

  buscar(termino:string){
    this.termino= termino;
    this.hayerror=false;
    
    this.paisService.buscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises)
      this.paises = paises

    }, (err) =>{
      this.hayerror=true;
      this.paises= [];
    });
  }

  sugerencias(termino: string){
    this.hayerror=false;
    // TODO: buscar sugerencias
  }

  constructor(private paisService:PaisService) { }

 

}
