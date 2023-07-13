import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss']
})
export class ViewMessagesComponent {

  messageForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), ExcludeWords]),
    text: new FormControl('', [Validators.required, Validators.minLength(10), ExcludeWords]),
  })

  requestMessageCreation() {
    console.log(this.messageForm.value)
    console.log(this.messageForm.controls)
  }

}

const ExcludeWords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  const excludedWords = ['react', 'vue', 'solidjs'];
  if(excludedWords.some( word => control.value.toLowerCase().includes(word))) {
    return { message: `You are using one of the excluded words ${excludedWords}` }
  }

  // Everything is good
  return null;
}
