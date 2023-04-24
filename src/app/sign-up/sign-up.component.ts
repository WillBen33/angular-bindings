import { Component } from '@angular/core';
import { Form } from '../models/form';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

  userList: User[] = [];

  user = new User('', '', '', '');

  userRegisterForm: Form = new Form('', '', '', '');

  onSubmit() {
    let newUser = (this.user = new User(
      this.userRegisterForm.firstName,
      this.userRegisterForm.lastName,
      this.userRegisterForm.email,
      this.userRegisterForm.password
    ));
    this.userList.push(newUser);
    console.table(this.userList);
  }

  ngOnInit() {
    
  }
}
