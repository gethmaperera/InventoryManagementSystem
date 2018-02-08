import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermDeletionComponent } from './long-term-deletion.component';

describe('LongTermDeletionComponent', () => {
  let component: LongTermDeletionComponent;
  let fixture: ComponentFixture<LongTermDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTermDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
