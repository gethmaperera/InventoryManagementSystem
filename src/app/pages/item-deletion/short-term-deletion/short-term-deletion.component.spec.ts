import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermDeletionComponent } from './short-term-deletion.component';

describe('ShortTermDeletionComponent', () => {
  let component: ShortTermDeletionComponent;
  let fixture: ComponentFixture<ShortTermDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
