import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service.service';
import { DataTableServiceService, Register } from 'app/service/data-table/data-table-service.service';

import Swal from 'sweetalert2';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})


export class PageComponent {


  client
  semaforo: any = '';
  freq: any = '';
  semaforostart: any = '';
  freqInd: any = '';
  sem: any = '';
  semwarning: any = '';
  apiUrl :any= '';
  data : any='';
  objDB: any;
  private dataEjemplo: Register[] = []

  constructor(
    private request: RequestService,
    private _httpClient: HttpClient,
    private dataTableService: DataTableServiceService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }

  ngOnInit() {
    this.dataTableService.registers.subscribe(msg => {
      this.dataEjemplo.push(msg)
      console.log(this.dataEjemplo)
    })
    // this.testComunicationSping()
  }

  startHilos() {
    this.request.queryGetAdministrator(`${this.apiUrl}/start_hilos/`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Encendiste todos los hilos de los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  startAll() {
    this.request.queryGetAdministrator(`${this.apiUrl}/start`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Encendiste todos los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  semEsquina() {
    this.request.queryGetAdministrator(`${this.apiUrl}/sync`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Los semaforos nunca van a ser los mismos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  startPULSADORES(){
    this.request.queryGetAdministrator(`${this.apiUrl}/pulsadores`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya puede presionar los pulsadores para dejar en rojo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  warningAll() {
    this.request.queryGetAdministrator(`${this.apiUrl}/warning`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya quedaron en warning los dos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  stopAll() {
    this.request.queryGetAdministrator(`${this.apiUrl}/stop`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya apagaste todos los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  stopOneSem() {
    this.request.queryGetAdministrator(`${this.apiUrl}/stop/sem${this.semaforo}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya apagaste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  startOneSem() {
    this.request.queryGetAdministrator(`${this.apiUrl}/stop/sem${this.semaforostart}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya prendiste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  changeFreq() {
    this.request.queryGetAdministrator(`${this.apiUrl}/frecuencia/${this.freq}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Cambiaste de frecuencia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  putWarning(){
    this.request.queryGetAdministrator(`${this.apiUrl}/warning/sem${this.semwarning}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya prendiste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  changeFreqSem(){
    this.request.queryGetAdministrator(`${this.apiUrl}/${this.freqInd}/sem${this.sem}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Cambiaste de frecuencia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  testComunicationSping(){
    this._httpClient.get("https://wmeterws.pro2umanizales.com/register")
      .subscribe(data => {
        this.objDB = data;
        /* console.log("Data peticion ", data) */
      })
  };

}
