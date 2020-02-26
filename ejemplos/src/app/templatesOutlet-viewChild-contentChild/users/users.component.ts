import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit {

  constructor() { }
  users = ["Lucas", "Guillermo", "Santiago - asdfsadf"];

  @ContentChild(UsersComponent, { static: true }) data: AppComponent;
  message;

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", this.data);
    this.message = 'ngAfterContentInit : El ContentChild solo se ' +
      'carga cuando la comunicación de componentes se hace por medio de ng-content.';
  }

}
