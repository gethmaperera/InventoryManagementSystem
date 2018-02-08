import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermUpdateComponent } from './short-term-update.component';

describe('ShortTermUpdateComponent', () => {
  let component: ShortTermUpdateComponent;
  let fixture: ComponentFixture<ShortTermUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
