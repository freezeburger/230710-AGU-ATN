import { Component, ViewChild, inject } from '@angular/core';
import { MessagesService } from './views/view-messages/services/messages.service';
import { distinctUntilChanged, endWith, skip, tap, timeout } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(NgbAlert) alert!:NgbAlert;

  notification$ = inject(MessagesService).messages$.pipe(
    skip(2),
    distinctUntilChanged((prev, curr) => prev.length === curr.length ),
    tap( () => setTimeout(() => this.alert.close() , 2000 ))
  );
}
