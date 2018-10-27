import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: []
})
export class TeamComponent implements OnInit {

  constructor(private render: Renderer) { }

  ngOnInit() {
  }

  select(event: Event) {
    event.preventDefault();
    console.log(event.target);
  }
}
