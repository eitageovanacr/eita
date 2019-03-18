import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1 : number = 0;
    valor2 : number = 0;


  somar(): void{
    let total = Number(this.valor1) + Number(this.valor2);
    alert("a soma é"+" "+total);

    if(valor1==0){
        alert("O numero "+this.valor+"é par")
    }
  }else{
       alert("O numero"+this.valor+"é impar")
  }

}
