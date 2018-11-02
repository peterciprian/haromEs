import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: []
})
export class TeamComponent implements OnInit {
  protected team = [
    { id: 0, name: 'Benkő Krisztina', desc: 'BK Lorem', top: 9, left: 9, active: false },
    { id: 1, name: 'Oláh Péter Ciprián', desc: 'OPC Lorem', top: 18, left: 71, active: false },
    { id: 2, name: 'Vadász Dániel Pál', desc: 'VDP Lorem', top: 21, left: 40, active: false },
    { id: 3, name: 'Lakner Lóránd László', desc: 'LLL Lorem', top: 42, left: 16, active: false },
    { id: 4, name: 'Lehotai Bence Gábor', desc: 'LBG Lorem', top: 50, left: 53, active: false },
    { id: 5, name: 'Gyimesi Levente Zsombor', desc: 'GyLZs Lorem', top: 64, left: 75, active: false },
    { id: 6, name: 'Treszkai Anett', desc: 'TA Lorem', top: 71, left: 34, active: false }
  ];
  protected selectedPerson = {};
  protected activePerson: number = null;

  constructor(private render: Renderer) { }

  ngOnInit() {
  }

  select(person) {
    this.activePerson = person.id;
    person.active = true;
    this.selectedPerson = person;
    console.log(this.selectedPerson);
  }
  close() {
    this.team[this.activePerson].active = false;
    this.selectedPerson = {};
    this.activePerson = null;
  }
}
