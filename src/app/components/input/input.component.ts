import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputType: string = ''
  genders: string[] = ['Male', 'Female', 'Other', 'Rather not say']
  idNumber: Number = 0;
  //*valid inputType values : 'datePicker', 'gender', 'idNumber'

  pickType(type: string) {
    return this.inputType === type
  }
}
