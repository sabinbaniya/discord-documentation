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
    const fullLevels: number[] = [];
    let j = 0;
    for (let i = 1; i < 101; i++) {
      j += i * 100;
      fullLevels.push(j);
    }
    this.levelsFirst = fullLevels.slice(0, 50);
    this.levelsSecond = fullLevels.slice(50);
  }
}
