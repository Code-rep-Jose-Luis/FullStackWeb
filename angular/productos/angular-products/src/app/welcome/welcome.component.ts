import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    constructor(private titleService: Title) { }
    ngOnInit() {
    this.titleService.setTitle('Bienvenido a Angular Products!');
    }

}
