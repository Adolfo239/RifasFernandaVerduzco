import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'app/utils/validation';
import { ArrayEstados, ArrayCantidadBoletos } from 'app/shared/Constants'

@Component({
    selector: 'app-modal-content',
    styleUrls: ['./modal.component.scss'],
    template: `
    
    <div class="modal-header" >
        <h5 class="modal-title text-center">{{modalButtonName}}</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> 
    <form *ngIf="!isComprar">
           
            <div class="form-group">
                <div class="container borderMaquinita">
                    <label >Boletos a generar:</label>
                    
                    <select class="form-control" id="numBoletos" [(ngModel)]="numBoletos">
                        <option value="" disabled selected>Selecciona la cantidad de boletos:</option>
                        <option *ngFor="let boleto of ArrayCantidadBoletos" [ngValue]="boleto.id">{{boleto.description}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="container borderMaquinita">
                        <div *ngIf="displayRandom">
                            <span *ngFor="let boletoRadom of boletosRadom" class="label label-danger lMaquinita">{{boletoRadom.number}}</span>
                        </div>
                        <p class="pMaquinita" *ngIf="numBoletos > 0" (click)="generar()">¡¡HAZ CLICK AQUÍ PARA GENERAR BOLETOS AL AZAR!!</p>
                        <img  *ngIf="displayMaquinita" class="responsiveImg" src="../assets/img/maquinita3.gif">
                        <p class="pMaquinita2" *ngIf="numBoletos === 0">SELECCIONA LA CANTIDAD DE BOLETOS A GENERAR</p>
                </div>
            </div>
        </form>
        <form *ngIf="isComprar" [formGroup]="profileForm" class="needs-validation" novalidate>
            <div class="form-group">
                <label for="phone">Número telefonico: </label>
                <input formControlName="phoneNumber" type="text" class="form-control" placeholder="Ingresar Número telefonico" id="phone" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div *ngIf="profileForm.controls.phoneNumber && (profileForm.controls.phoneNumber.dirty || profileForm.controls.phoneNumber.touched)"
                class="alert">
                <div *ngIf="profileForm.controls.phoneNumber.errors?.['required']">
                    se requiere telefono
                </div>
                </div>
                
            </div>
            <div class="form-group">
                <label for="firstName">Nombre(s)</label>
                <input formControlName="firstName" type="text" class="form-control" placeholder="Ingresar Nombre(s)" id="firstName" >
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
            <div class="form-group">
                <label for="name">Apellidos(s):</label>
                <input formControlName="lastName" type="text" class="form-control" placeholder="Ingresar Appellido(s)" id="lastName">
            </div>
            <div class="form-group">
                <label for="state">Estado:</label>
                <!-- <input formControlName="state" type="text" class="form-control" placeholder="Ingresar estado" id="state"> -->
                <select formControlName="state" class="form-control" id="state">
                    <option value="" disabled selected>Selecciona un estado:</option>
                    <option *ngFor="let state of lstStates">{{state.description}}</option>
                </select>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Cerrar</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="!isComprar ? continue() : buyBoletos()">{{!isComprar ? 'Continuar' : 'Apartar'}}</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;
    @Input() lstStates;
    @Input() modalButtonName;
    @Input() isComprar;
    @Input() ArrayCantidadBoletos;
    @Input() boletos;
    firsName = 'Juan Adolfo';
    lastName = 'Ruiz Topete';
    numBoletos = 0;
    boletosRadom: number[] = null;
    displayRandom = false;
    displayMaquinita = false;

    profileForm = new FormGroup({
        phoneNumber: new FormControl('', [Validators.required,Validators.minLength(10), Validation.phoneNumber()]),
        firstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        state: new FormControl('', [Validators.required])
      });

    constructor(public activeModal: NgbActiveModal) {}

    buyBoletos() {
        console.log(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
        if (this.profileForm.invalid) {
            
            console.log(this.profileForm);
            return;
        } else {
            this.activeModal.close('Close click');
        }
      }

      continue() {
        this.isComprar = true;
        console.log('es comprar: ', this.isComprar);
      }

      generar() {
        console.log('Lista de boletos: ', this.boletos);
        console.log('Numero de boletos seleccionados: ', this.numBoletos);
        this.boletosRadom = this.getMultipleRandom(this.boletos, this.numBoletos);
        console.log('Lista de boletos random: ', this.boletosRadom );
        this.displayMaquinita = true;
        this.displayRandom = false;
        console.log('display maquinita: ', this.displayMaquinita);
        setTimeout(() => {
            this.displayRandom = true;
            console.log('display SelectNum: ',  this.displayRandom );
            this.displayMaquinita = false;
        console.log('display maquinita: ', this.displayMaquinita);
        }, 7000);
        
      }


        getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
      }

      fetchForm() {
        this.profileForm.setValue({
            firstName: this.firsName,
            lastName: this.lastName,
            state: this.profileForm.value.state,
            phoneNumber: this.profileForm.value.phoneNumber
        })
      }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent implements OnInit{
    @Input() modalButtonName;
    @Input() boletos;
    lstStates: any[] = ArrayEstados;
    constructor(private modalService: NgbModal) {}
    
    ngOnInit(): void {
    }


    open() {
        const modalRef = this.modalService.open(NgbdModalContent, {backdrop: 'static', keyboard: false });
        modalRef.componentInstance.lstStates = this.lstStates;
        modalRef.componentInstance.modalButtonName = this.modalButtonName;
        modalRef.componentInstance.isComprar = this.modalButtonName === 'MAQUINITA DE LA SUERTE' ? false : true;
        modalRef.componentInstance.ArrayCantidadBoletos = ArrayCantidadBoletos;
        modalRef.componentInstance.boletos = this.boletos;
    }
}
