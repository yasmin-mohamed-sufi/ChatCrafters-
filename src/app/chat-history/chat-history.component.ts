import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  @Input() history = '';  
<<<<<<< HEAD
  @Input() messageList: { timestamp: string, username: string, text: string }[] = [];
=======
  @Input() messageList: { timestamp: string, text: string }[] = [];
  
>>>>>>> facd0eb93d5c65afe68b1b7f0b35573f2d83f529

 public showDate(index: number) {
  if(index == 0 ) {
    return true
  }else {
    let lastDate = new Date(this.messageList[index-1].timestamp)
    let nowDate = new Date(this.messageList[index].timestamp)
    if(lastDate.getDate() == nowDate.getDate()) {
      return false
    }else {
      return true
    }
  }
 } 
  
}


