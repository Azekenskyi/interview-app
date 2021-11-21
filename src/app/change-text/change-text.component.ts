import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-change-text',
  templateUrl: './change-text.component.html',
  styleUrls: ['./change-text.component.scss']
})
export class ChangeTextComponent implements OnInit {
  form: FormGroup;
  text!: string;
  countChange: number = 0;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    interval(10000).subscribe(res => {
      this.text = 'Изменения были внесены автоматически!';
      this.countChange += 1;
    })
  }

  sendData() {
    if(this.form.valid) {
      this.text = this.form.get('name')?.value;
      this.countChange += 1;
      this.form.reset();
    }
  }
}
