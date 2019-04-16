import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSinglecellHistComponent } from './plot-singlecell-hist.component';

describe('PlotSinglecellHistComponent', () => {
  let component: PlotSinglecellHistComponent;
  let fixture: ComponentFixture<PlotSinglecellHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSinglecellHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSinglecellHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
