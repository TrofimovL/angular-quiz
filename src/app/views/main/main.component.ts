import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  link: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.link = this.authService.getLoggedIn() ? '/choice' : 'signup';
  }

}
