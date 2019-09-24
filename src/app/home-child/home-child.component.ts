import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Hero } from '../home/home.component';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') masterName: string;

  @Output() objChild:EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() objChildString:EventEmitter<string> = new EventEmitter<string>();
  childValue:string="Child element";
  constructor() {
    
   }

  ngOnInit() {
  }
  call(){
    debugger;
    this.objChild.emit(this.hero);
    this.objChildString.emit(this.childValue);
  }
}

