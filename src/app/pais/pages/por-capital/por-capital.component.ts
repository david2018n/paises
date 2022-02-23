import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayerror:boolean = false;
  paises: Country[] = [];

  buscar(termino: string){
    this.termino= termino;
    this.hayerror=false;
    
    this.paisService.bucarCapital(this.termino)
    .subscribe(paises=>{
      console.log(paises)
      this.paises = paises

    }, (err) =>{
      this.hayerror=true;
      this.paises= [];
    });
  }


  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

}
