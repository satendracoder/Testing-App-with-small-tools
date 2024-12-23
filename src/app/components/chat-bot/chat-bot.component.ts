import { Component } from '@angular/core';
import { SocketioService } from '../../services/socket/socketio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {

  userId: string = ''; // User ID
  messageToSend: string = ''; // Message to send
  receivedMessages: any[] = []; // Store received messages
  Tablesdata: any = [];

  constructor(private webSocketService: SocketioService) {}

  ngOnInit(): void {
   // Set up callback for incoming WebSocket messages
    this.webSocketService.setOnMessageCallback((message: string) => {
      // Parse the message (it's a JSON string)
      const parsedMessage = JSON.parse(message);

      // Check if Data exists and push it to the receivedMessages array
      if (parsedMessage && parsedMessage.Data && Array.isArray(parsedMessage.Data)) {
        this.receivedMessages.push(...parsedMessage.Data);  // Spread the Data array into receivedMessages
      } else {
        console.error('Invalid message format or missing Data');
      }
    });
  }
  

  connect(): void {
    this.webSocketService.connect('wss://proapitest3.redmilbusinessmall.com/ws/getData');
    
  }

  sendMessage(): void {
    if (this.messageToSend.trim()) {
      this.webSocketService.sendMessage(this.userId, this.messageToSend);
      this.messageToSend = ''; // Clear input field
    }
  }

  disconnect(): void {
    this.webSocketService.disconnect();
  }
}