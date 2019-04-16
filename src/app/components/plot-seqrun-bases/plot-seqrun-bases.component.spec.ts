import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSeqrunBasesComponent } from './plot-seqrun-bases.component';

describe('PlotSeqrunBasesComponent', () => {
  let component: PlotSeqrunBasesComponent;
  let fixture: ComponentFixture<PlotSeqrunBasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSeqrunBasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSeqrunBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
