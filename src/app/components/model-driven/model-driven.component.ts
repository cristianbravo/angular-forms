import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  formData;
  emailId:string;

  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      emailid : new FormControl("hola@chao.com"),
      passwd : new FormControl("1234")
    });
  }

  onClickSubmit(data) {
    this.emailId = data.emailid;

    console.log(data);
  }

}
