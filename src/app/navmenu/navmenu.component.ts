import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  clickState:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onClickMenu()
  {
    this.clickState=!this.clickState;
  }

}
