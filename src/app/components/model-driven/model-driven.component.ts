import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  formData: FormGroup;
  emailid: FormControl;
  passwd: FormControl;
  emailId:string;
  emailPattern: string;

  constructor() {
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createForm(){
    this.formData = new FormGroup({
      emailid : this.emailid,
      passwd : this.passwd
    });
  }

  private createFormControls(){
    this.emailid = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailPattern)
    ]);

    this.passwd = new FormControl('', [
      this.passwdCustom
    ]);
  }

  private passwdCustom(formControl : FormControl){
    if (formControl.value == 'hola'){
      return { 'passwd' : true };
    }
  }

  onClickSubmit(data) {
    this.emailId = data.emailid;

    console.log(data);
  }

}
