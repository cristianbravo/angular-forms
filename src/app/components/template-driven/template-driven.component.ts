import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  emailId:string;
  emailPattern:string;

  constructor() {
    this.emailId = '';
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.emailId = data.emailid;

    console.log(data);
  }
}
