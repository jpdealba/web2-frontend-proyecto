import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { CoinComponent } from 'src/app/pages/coin/coin.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = environment.apiUrl;
  socket: any = null;
  room: string = '';
  addTransaction: Subject<any> = new Subject<any>();
  constructor() { }

  setRoom(room: string) {
    this.socket.disconnect()
    this.socket = null
    this.connect()
    this.room = room;
    this.socket.emit('join-room', room);
  }

  connect() {
    this.socket = socketIo.io(this.url);
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.url}`);
      this.subscribeToChanges()
    });
  }

  subscribeToChanges(): void {
    this.socket.on("transaction-case", (data: any) => {
      if (data.symbol_from == this.room || data.symbol_to == this.room) {
        this.addTransaction.next(data);
      }

    });
  }

  sendTransaction(data: any) {
    this.socket.emit('transaction-case', this.room, {...data, timestamp: new Date().toISOString()});
  }
}
