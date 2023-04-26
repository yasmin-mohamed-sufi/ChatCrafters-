

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  public username: string = '';
  public usernameSaved: boolean = false;

  @Output() saveUsernameEvent = new EventEmitter<any>();

  public saveUsername(): void {
    if (this.username.trim() !== '') {
      if (this.usernameSaved) {
        this.username = '';
        this.usernameSaved = false;
        this.saveUsernameEvent.emit(null); // emit a logout event
      } else {
        this.usernameSaved = true;
        this.saveUsernameEvent.emit(this.username);
      }
    }
  }
}





