import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRainComponent } from './next-rain.component';

describe('NextRainComponent', () => {
  let component: NextRainComponent;
  let fixture: ComponentFixture<NextRainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextRainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
