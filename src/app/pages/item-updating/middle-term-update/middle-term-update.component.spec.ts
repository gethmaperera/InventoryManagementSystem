import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTermUpdateComponent } from './middle-term-update.component';

describe('MiddleTermUpdateComponent', () => {
  let component: MiddleTermUpdateComponent;
  let fixture: ComponentFixture<MiddleTermUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTermUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTermUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
