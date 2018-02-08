import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTermDeletionComponent } from './middle-term-deletion.component';

describe('MiddleTermDeletionComponent', () => {
  let component: MiddleTermDeletionComponent;
  let fixture: ComponentFixture<MiddleTermDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTermDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTermDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
