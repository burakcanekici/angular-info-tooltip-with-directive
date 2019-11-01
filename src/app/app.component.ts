import { Component } from '@angular/core';
import { FormGroup, FormControl, Form, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public beComponentForm: FormGroup = new FormGroup({
      inp_cntrl: new FormControl(''),
      slct_cntrl: new FormControl('')
    });
}
