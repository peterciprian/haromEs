import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: []
})
export class TeamComponent implements OnInit {
  protected team = [
    { name: 'Benkő Krisztina', desc: 'BK Lorem', top: 9, left: 9 },
    { name: 'Oláh Péter Ciprián', desc: 'OPC Lorem', top: 18, left: 71 },
    { name: 'Vadász Dániel Pál', desc: 'VDP Lorem', top: 21, left: 40 },
    { name: 'Lakner Lóránd László', desc: 'LLL Lorem', top: 42, left: 16 },
    { name: 'Lehotai Bence Gábor', desc: 'LBG Lorem', top: 50, left: 53 },
    { name: 'Gyimesi Levente Zsombor', desc: 'GyLZs Lorem', top: 64, left: 75 },
    { name: 'Treszkai Anett', desc: 'TA Lorem', top: 71, left: 34 }
  ];

  constructor(private render: Renderer) { }

  ngOnInit() {
  }

  select(event: Event) {
    event.preventDefault();
    console.log(this.render);
  }
}
