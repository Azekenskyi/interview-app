import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-send',
  templateUrl: './data-send.component.html',
  styleUrls: ['./data-send.component.scss']
})
export class DataSendComponent implements OnInit {
  form: FormGroup;
  data!: {
    firstName: string;
    lastName: string;
  }
  text!: string;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    const data = localStorage.getItem('data');
    if(!!data) {
      this.form.patchValue(JSON.parse(data));
    }
  }

  sendData() {
    if(this.form.valid) {
      this.data = this.form.getRawValue();
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }
}
