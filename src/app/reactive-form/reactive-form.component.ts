import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

form = new FormGroup({
  username : new FormControl('', [
    Validators.required, 
    Validators.minLength(3)
  ]),
  password: new FormControl('', Validators.required)
});

get username(){
  return this.form.get('username');
}

}
