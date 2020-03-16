import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';
import { FinService } from 'src/app/fin.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthServiceService, public fins: FinService) { }

  ngOnInit() {
  }

  LogOut(){
    this.auth.LogoutAuth()
  }

}
