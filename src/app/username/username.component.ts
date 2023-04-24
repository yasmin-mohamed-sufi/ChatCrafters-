

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  public username: string = '';
  public usernameSaved: boolean = false;
  

  @Output() saveUsernameEvent = new EventEmitter<string>();

  public saveUsername(): void {
    this.saveUsernameEvent.emit(this.username);
    this.usernameSaved = true;
  }
   
  
}




