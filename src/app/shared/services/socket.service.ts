import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = "http://localhost:3000";
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
    this.socket.on("transaction-case", (user_id: string, amount: number, coin_from: string, coin_to: string) => {
      console.log(user_id)
    });
  }

  sendTransaction(id: any) {
    this.socket.emit('transaction-case', this.room, id);
  }
}
