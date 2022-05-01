import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {

  semaforo: any = '';
  freq: any = '';
  semaforostart: any = '';
  freqInd: any = '';
  sem: any = '';
  semwarning: any = '';

  constructor(
    private request: RequestService
  ) {}

  ngOnInit() {}

  startHilos() {
    this.request.queryGetAdministrator('/start_hilos');
    Swal.fire({
      title: 'Hecho!',
      text: 'Encendiste todos los hilos de los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  startAll() {
    this.request.queryGetAdministrator('/start');
    Swal.fire({
      title: 'Hecho!',
      text: 'Encendiste todos los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  semEsquina() {
    this.request.queryGetAdministrator('/sync');
    Swal.fire({
      title: 'Hecho!',
      text: 'Los semaforos nunca van a ser los mismos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  startPULSADORES(){
    this.request.queryGetAdministrator('/pulsadores');
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya puede presionar los pulsadores para dejar en rojo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  warningAll() {
    this.request.queryGetAdministrator(`/warning`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya quedaron en warning los dos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  stopAll() {
    this.request.queryGetAdministrator(`/stop`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya apagaste todos los semaforos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  stopOneSem() {
    this.request.queryGetAdministrator(`/stop/sem${this.semaforo}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya apagaste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  startOneSem() {
    this.request.queryGetAdministrator(`/stop/sem${this.semaforostart}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya prendiste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  changeFreq() {
    this.request.queryGetAdministrator(`/frecuencia/${this.freq}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Cambiaste de frecuencia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  putWarning(){
    this.request.queryGetAdministrator(`/warning/sem${this.semwarning}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Ya prendiste ese semaforo',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  changeFreqSem(){
    this.request.queryGetAdministrator(`/${this.freqInd}/sem${this.sem}`);
    Swal.fire({
      title: 'Hecho!',
      text: 'Cambiaste de frecuencia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

}
