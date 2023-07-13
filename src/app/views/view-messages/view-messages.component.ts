import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MessageEntry } from './interfaces/type';
import { MessagesService } from './services/messages.service';

// Mapped Type
type IForm<DataType> = {
  [Key in keyof DataType]:FormControl<DataType[Key] | null>
}


@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss']
})
export class ViewMessagesComponent {

  messageForm = new FormGroup< IForm<MessageEntry> >({
    title: new FormControl('Message ', [Validators.required, Validators.minLength(5), ExcludeWords]),
    text: new FormControl('Content of message', [Validators.required, Validators.minLength(10), ExcludeWords]),
  })

  /*
  messageForm = new FormGroup({
    title: new FormControl<Message['title']>('', [Validators.required, Validators.minLength(5), ExcludeWords]),
    text: new FormControl<LongText>('', [Validators.required, Validators.minLength(10), ExcludeWords]),
  })
  */

  messageService = inject(MessagesService);

  requestMessageCreation() {
    if(this.messageForm.invalid) return;

    // TODO Better Value Check
    let { title, text} = this.messageForm.value;
    title = title || '';
    text = text || '';

    this.messageService.save( { title, text}  )

    /*
    console.log(this.messageForm);
    console.log(this.messageForm.value);
    console.log(this.messageForm.controls);
    */

    this.messageForm.reset();
  }

}

const ExcludeWords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  const excludedWords = ['react', 'vue', 'solidjs'];

  if(excludedWords.some( word => control.value?.toLowerCase().includes(word))) {
    return { excludedWords: `You are using one of the excluded words ${excludedWords}` }
  }

  // Everything is good
  return null;
}
