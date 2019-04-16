import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePoolingComponent } from './sample-pooling.component';

describe('SamplePoolingComponent', () => {
  let component: SamplePoolingComponent;
  let fixture: ComponentFixture<SamplePoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
