import { Component  } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  isLinear = true;

  firstFormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required])
  })

  secondFormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),

  })


}
