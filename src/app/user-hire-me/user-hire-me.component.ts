import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-hire-me',
  templateUrl: './user-hire-me.component.html',
  styleUrls: ['./user-hire-me.component.scss']
})
export class UserHireMeComponent {

  data = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })



  sendMail() {
    if (this.data.invalid) {
      alert("fill all details correctly");
    } else {
      console.log(this.data.value);
    }
  }



  
  get name() {
    return this.data.get('name');
  }
  get email() {
    return this.data.get('email');
  }
  get subject() {
    return this.data.get('subject');
  }
  get message() {
    return this.data.get('message');
  }
}
