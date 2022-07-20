import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Danniel',
      email: 'danniel@gmail.com',
      password: '123456'

    },
    {
      id: 2,
      name: 'Evelyn',
      email: 'evelyn@gmail.com',
      password: '123456'

    }
  ]

  constructor() { }

  getUsers() {
    return this.users
  }

  getUsersByEmailAndPassword(email:string, password: string) {
    return this.users.find((user) =>  user.email === email && user.password === password)
  }
}
