import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoletoService } from 'app/Services/boleto.service';
import {  BoletoDto, BoletoBuyDto } from 'app/interfaces/boleto';
import { ArrayBoletos } from 'app/shared/Constants';
import { of } from 'rxjs';

@Component({
  selector: 'app-comprar-boletos',
  templateUrl: './comprar-boletos.component.html',
  styleUrls: ['./comprar-boletos.component.scss'],
})
export class ComprarBoletosComponent implements OnInit {

  profileForm = new FormGroup({
    phoneNumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    state: new FormControl(''),
  });


  boletos: BoletoDto[] = [];
  boletosCopy: BoletoDto[];
  boletosSelected: string[] = [];
  searchValue: string = '';
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  modalButtonName: string = 'MAQUINITA DE LA SUERTE';

  constructor(private boletoService: BoletoService) { }

  ngOnInit(): void {
    this.getBoletos();
  }

  getBoletos() {
    this.boletoService.getListAvailable(1)
    .subscribe(
      result => {
      this.boletos = result.map(function (x) {
        x.boletoClass = 'ticket';
        return x
      });

      this.boletos = result;
      console.log('this.boletos: ', this.boletos);
      this.boletosCopy = result;
      console.log('this.boletosCopy: ', this.boletosCopy);
    });
  }
  boletoSelected(boletoNumber: string) {
    //Get the button to update the class
    var boletoClass = document.getElementById(boletoNumber)?.classList.value;
    if (boletoClass === "ticket") {
      boletoClass = "ticketSelected"
    } else {
      boletoClass = "ticket"
    }
    //Update the value of the button class
    this.updateBoletoStatusView(boletoNumber, boletoClass);

    //Remove or add boletos
    if (this.boletosSelected.find(x => x === boletoNumber)) {
      this.boletosSelected = this.boletosSelected.filter(x => x !== boletoNumber);
    } else {
      this.boletosSelected.push(boletoNumber);
    }

    this.boletosObservable();
  }

  boletosObservable() {
    console.log('observable boletos', this.boletos);
    const boletoSelected$ = of (this.boletosSelected);
    console.log('observable: ', boletoSelected$);
    boletoSelected$.subscribe({
      next: value => {
        if (value.length > 0) {
          this.modalButtonName = 'APARTAR BOLETOS'
        } else {
          this.modalButtonName = 'MAQUINITA DE LA SUERTE'
        }
      }
      // error: err => console.error('Observable emitted an error: ' + err),
      // complete: () => console.log('Observable emitted the complete notification')
    });
  }

  updateBoletoStatusView(boletoNumber: string, boletoClass: string) {
    var boletoIdx = this.boletos.findIndex(x => x.number === boletoNumber);

    this.boletos[boletoIdx] = {
      number: boletoNumber,
      available: true,
      boletoClass: boletoClass,
    }
  }

  /*fetchData(): void {
    this.articlesService.getArticles(this.searchValue).subscribe((articles) => {
      this.articles = articles;
    });
  }*/

  @Output()
  onSearchTextChanged() {
    //this.searchValue = this.searchForm.value.searchValue ?? '';
    //this.fetchData();
    this.boletos = this.boletosCopy;
    this.updateStatusAfterSearching();
    this.searchTextChange.emit(this.searchValue);
    this.boletos = this.boletos.filter(x => this.searchValue === '' || x.number.includes(this.searchValue));
  }

  updateStatusAfterSearching() {
    this.boletos = this.boletos.map(function (x) {
      x.boletoClass = 'ticket';
      return x
    });

    this.boletos.forEach(item1 => {
      var itemFromArr2 = this.boletosSelected.find(item2 => item2 == item1.number);
      if (itemFromArr2) {
        item1.boletoClass = 'ticketSelected';
      }
    })
  }

  buyBoletos() {
    console.warn(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']

  }

}
