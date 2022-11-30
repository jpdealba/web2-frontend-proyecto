import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = environment.apiUrl;
  socket: any = null;
  room: string = '';

  constructor() { }

  setRoom(room: string) {
    this.room = room;
    this.socket.emit('join-room', room);
  }

  connect() {
    this.socket = socketIo.io(this.url);
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.url}`);
    });
  }

  subscribeToChanges(): void {
    this.socket.on("transaction-case", (data: any) => {
      console.log("transaction-case")
      console.log(data)
    });
  }

  sendTransaction(data: any) {
    console.log(this.socket)
    console.log(this.room)
    this.socket.emit('transaction-case', this.room, data);
  }
}
