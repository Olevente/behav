import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  data = 'alma';

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToService() {
    
  }

}
