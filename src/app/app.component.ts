import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private formbuilder: FormBuilder){}

  form = this.formbuilder.group({
    input1: ['', Validators.required],
    input2: ['', Validators.required],
  })

  getData(){
    const val1 = this.form.get('input1').value;
    const val2 = this.form.get('input2').value;
  }
}
