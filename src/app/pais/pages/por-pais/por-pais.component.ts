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
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

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
    this.termino = termino;
    this.mostrarSugerencia=true;
    this.paisService.buscarPais(termino)
    .subscribe( paises =>{
      this.paisesSugeridos= paises.splice(0,5);
    }, (err)=> {this.paisesSugeridos=[];}
    )
  }
  buscarSugerido(termino: string){
    this.buscar(termino);
    this.mostrarSugerencia=false;
    
  }

  constructor(private paisService:PaisService) { }

 

}
