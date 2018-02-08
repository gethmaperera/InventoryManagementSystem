import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLastAllocationComponent } from './view-last-allocation.component';

describe('ViewLastAllocationComponent', () => {
  let component: ViewLastAllocationComponent;
  let fixture: ComponentFixture<ViewLastAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLastAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLastAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
