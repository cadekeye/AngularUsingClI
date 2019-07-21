import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})


export class CircularComponent implements OnInit {
  public HappyText = 'I am happy';

  public Todo = [
     'Running',
     'Walking',
     'Squarting'

  ];
  
  constructor(){}

  ngOnInit() {
  }

  ChangeMe(){
    this.HappyText="I am more happy";
  }

}
