import { inject, Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
 private socket: WebSocket | null = null;
  toster = inject(ToastrService)
  // Connect to the WebSocket server
  connect(url: string): void {
    this.socket = new WebSocket(url);

    // Handle WebSocket open event
    this.socket.onopen = () => {
      console.log('WebSocket connection established.');
      this.toster.success('WebSocket connection established.')
    };

    // Handle WebSocket message event
    this.socket.onmessage = (event) => {
      //console.log('Received message:', event.data);
      // Call the onMessage callback with the received data
      if (this.onMessageCallback) {
        this.onMessageCallback(event.data);
      }
    };

    // Handle WebSocket error event
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Handle WebSocket close event
    this.socket.onclose = () => {
      console.log('WebSocket connection closed.');
       this.toster.error('WebSocket connection closed.')
    };
  }

  // Send message to WebSocket server
  sendMessage(userId: string, message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const data = { userId, message };
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not connected.');
      this.toster.error('WebSocket is not connected.')
    }
  }

  // Disconnect the WebSocket connection
  disconnect(): void {
    if (this.socket) {
      this.socket.close();
    }
  }

  // Set a callback for incoming messages
  private onMessageCallback: ((message: string) => void) | null = null;

  setOnMessageCallback(callback: (message: string) => void): void {
    this.onMessageCallback = callback;
  }
}