import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSeqrunCountComponent } from './plot-seqrun-count.component';

describe('PlotSeqrunCountComponent', () => {
  let component: PlotSeqrunCountComponent;
  let fixture: ComponentFixture<PlotSeqrunCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSeqrunCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSeqrunCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
