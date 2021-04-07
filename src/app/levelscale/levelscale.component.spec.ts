import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelscaleComponent } from './levelscale.component';

describe('LevelscaleComponent', () => {
  let component: LevelscaleComponent;
  let fixture: ComponentFixture<LevelscaleComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelscaleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LevelscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the expected properties', () => {
    expect(component.levelsFirst).toBeDefined('missing levelsFirst property');
    expect(component.levelsSecond).toBeDefined('missing levelsSecond property');
  });

  it('should generate 100 levels', () => {
    expect(component.levelsFirst.length).toEqual(
      50,
      'did not generate first 50 levels'
    );
    expect(component.levelsSecond.length).toEqual(
      50,
      'did not generate second 50 levels'
    );
  });

  it('should render the table correctly', () => {
    const tablerows = compiled.querySelectorAll('tr');
    expect(tablerows.length).toEqual(51, 'did not render 50 rows plus header');
    const levels = compiled.querySelectorAll('.level');
    const { 0: firstLevel, [levels.length - 1]: lastLevel } = levels;
    expect(firstLevel.textContent).toBe(
      '1',
      'did not render first level correctly'
    );
    expect(lastLevel.textContent).toBe(
      '100',
      'did not render last level correctly'
    );
    const points = compiled.querySelectorAll('.points');
    const { 0: firstPoint, [points.length - 1]: lastPoint } = points;
    expect(firstPoint.textContent).toBe(
      '100',
      'did not render first point correctly'
    );
    expect(lastPoint.textContent).toBe(
      '505000',
      'did not render last point correctly'
    );
  });
});
