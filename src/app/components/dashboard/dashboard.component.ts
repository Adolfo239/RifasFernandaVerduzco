import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  preguntas = true;
  preguntasClass = 'collapse show'
  nosotros = true;
  nosotrosClass = 'collapse show'
  contacto = true;
  contactoClass = 'collapse show'

  constructor() { }

  ngOnInit(): void {
  }

  preguntasOnChange() {
    this.preguntas = !this.preguntas;
    if (this.preguntas === true) {
      this.preguntasClass = 'collapse show'
    } else {
      this.preguntasClass = 'collapse'
    }
  }

  nosotrosOnChange() {
    this.nosotros = !this.nosotros;
  }

  contactoOnChange() {
    this.contacto = !this.contacto;
  }


}
