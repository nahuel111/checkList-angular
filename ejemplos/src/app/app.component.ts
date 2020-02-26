import { Component, ContentChild, OnInit, ViewChild, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { UsersComponent } from './templatesOutlet-viewChild-contentChild/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  title = 'CicloVidaComponent';
  color = 'red';
  //  users = ["Lucas", "Guillermo", "Santiago"];
  users: any[];
  products = ["Iphone", "Motorola", "Samsung"];

  @ViewChild(UsersComponent, { static: true }) data: UsersComponent;

  @ContentChild(UsersComponent, { static: true }) data1: UsersComponent;

  update() {
    this.color = 'blue';
  }
  ngOnInit() {
    this.users = this.data.users;
  }

  ngAfterViewInit() {
    console.log("data", this.data);
  }



  ngAfterContentInit() {
    // console.log("00000000000000000000", this.data1);
  }

  ngAfterContentChecked() {
    console.log("1111111111111111111111111", this.data1);
  }
}
