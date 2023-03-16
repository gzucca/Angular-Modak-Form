import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputType: string = ''
  genders: string[] = ['Male', 'Female', 'Other', 'Rather not say']
  idNumber: number;
  @Input() control = new FormControl();
  
  //*valid inputType values : 'datePicker', 'gender', 'idNumber'

  pickType(type: string) {
    return this.inputType === type
  }
}
