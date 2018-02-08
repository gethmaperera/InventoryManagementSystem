import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermUpdateComponent } from './long-term-update.component';

describe('LongTermUpdateComponent', () => {
  let component: LongTermUpdateComponent;
  let fixture: ComponentFixture<LongTermUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTermUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
