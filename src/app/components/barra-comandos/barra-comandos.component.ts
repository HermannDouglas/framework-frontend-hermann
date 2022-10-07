import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-comandos',
  templateUrl: './barra-comandos.component.html',
  styles: [
  ]
})
export class BarraComandosComponent implements OnInit {

  constructor() { }

  busca(termoBusca: String) {
    console.log(termoBusca);
  }

  ngOnInit(): void {
  }

}
