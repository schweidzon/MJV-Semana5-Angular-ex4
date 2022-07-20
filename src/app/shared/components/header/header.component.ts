import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User



  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user')
    if (userSessionStorage) {
      this.user = JSON.parse(userSessionStorage)
    }
  }

  navigatebyUrl(url:string) {
    this.router.navigateByUrl(url)
    
  }

  exit() {
    sessionStorage.clear()
    this.router.navigateByUrl('login')
  }

}
