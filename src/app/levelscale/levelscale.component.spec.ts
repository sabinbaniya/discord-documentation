import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelscaleComponent } from './levelscale.component';

describe('LevelscaleComponent', () => {
  let component: LevelscaleComponent;
  let fixture: ComponentFixture<LevelscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelscaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
