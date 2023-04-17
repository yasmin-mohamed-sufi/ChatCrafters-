import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  username: string = '';

  login() {
    console.log('Logged in as', this.username);
    // Here, you can add your login logic
  }

}

