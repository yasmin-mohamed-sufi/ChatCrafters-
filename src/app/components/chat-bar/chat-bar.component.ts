import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
  @Input() username: string = '';
  @Input() usernameSaved: boolean = false;
  @Output() submitMessage = new EventEmitter<string>();

  public chatMessage = '';
  public errorMessage = '';

  public addMessage(message: string): void {
    if (!message.trim()) {
      this.errorMessage = 'Please add text!';
      this.chatMessage = '';

      return;
    }

    const timestamp = new Date().toLocaleString('de');
    const messageToSend = `${timestamp} - ${this.username}: ${message}<br>`;
    

    this.submitMessage.emit(messageToSend);
    this.chatMessage = '';
    this.errorMessage = '';
  }
}











