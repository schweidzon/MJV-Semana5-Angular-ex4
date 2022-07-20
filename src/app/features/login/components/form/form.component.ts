import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  email: string =''
  password: string =''
  error = false

  constructor(private userServices: UsersService,
    private router : Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const user = this.userServices.getUsersByEmailAndPassword(this.email, this.password)
    if (user) {
      this.router.navigateByUrl('students-list')
      sessionStorage.setItem('user', JSON.stringify(user))
    } else  {
      this.error = true
    }
  }

}
