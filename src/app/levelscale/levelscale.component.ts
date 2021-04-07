import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelscale',
  templateUrl: './levelscale.component.html',
  styleUrls: ['./levelscale.component.css'],
})
export class LevelscaleComponent implements OnInit {
  public levelsFirst: number[] = [];
  public levelsSecond: number[] = [];

  constructor() {}

  ngOnInit(): void {
    let j = 0;
    for (let i = 1; i < 51; i++) {
      j += i * 100;
      this.levelsFirst.push(j);
    }
    for (let i = 51; i < 101; i++) {
      j += i * 100;
      this.levelsSecond.push(j);
    }
  }
}
