import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { WebsocketService } from '../websocket.service';

export interface Register {
  id: string;
  clave: string;
  valor: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataTableServiceService {
  public registers: Subject<Register> = new Subject<Register>();

  constructor(private wsService: WebsocketService) {
    this.registers = <Subject<Register>>this.wsService
      .connect('https://wmeterws.pro2umanizales.com/register')
      .pipe(
        map((response: MessageEvent): Register => {
          const data = JSON.parse(response.data);
          return {
            id: data.id,
            clave: data.clave,
            valor: data.valor
          };
        }));
  }

  public sendMessage(message) {
    this.registers.next(message);
  }

}
