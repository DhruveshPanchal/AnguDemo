import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMethods = [
    {id:1, name:'Email'},
    {id:2, name:'Phone'}    
  ];

  logName(x){
    console.log(x);
  }

  submit(f){
    console.log(f);
    console.log("Form Value:" + f.value.firstName + ":" + f.value.comment);
  }
}
