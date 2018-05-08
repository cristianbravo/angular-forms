import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  emailId:string;

  constructor() {
    this.emailId = '';
  }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.emailId = data.emailid;

    console.log(data);
  }
}
