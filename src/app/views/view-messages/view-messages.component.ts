import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MessageEntry } from './interfaces/type';

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
    title: new FormControl('', [Validators.required, Validators.minLength(5), ExcludeWords]),
    text: new FormControl('', [Validators.required, Validators.minLength(10), ExcludeWords]),
  })

  /*
  messageForm = new FormGroup({
    title: new FormControl<Message['title']>('', [Validators.required, Validators.minLength(5), ExcludeWords]),
    text: new FormControl<LongText>('', [Validators.required, Validators.minLength(10), ExcludeWords]),
  })
  */

  requestMessageCreation() {
    //if(this.messageForm.invalid) return;

    console.log(this.messageForm);
    console.log(this.messageForm.value);
    console.log(this.messageForm.controls);

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
