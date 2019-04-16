import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotStorageInfoComponent } from './plot-storage-info.component';

describe('PlotStorageInfoComponent', () => {
  let component: PlotStorageInfoComponent;
  let fixture: ComponentFixture<PlotStorageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotStorageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotStorageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
