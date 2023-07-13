import { Component, inject } from '@angular/core';
import { MessagesService } from '../view-messages/services/messages.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss']
})
export class ViewNotificationComponent {
  messageService = inject(MessagesService);
}
