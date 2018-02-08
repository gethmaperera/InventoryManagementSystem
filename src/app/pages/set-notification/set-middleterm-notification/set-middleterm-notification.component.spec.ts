import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMiddletermNotificationComponent } from './set-middleterm-notification.component';

describe('SetMiddletermNotificationComponent', () => {
  let component: SetMiddletermNotificationComponent;
  let fixture: ComponentFixture<SetMiddletermNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMiddletermNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMiddletermNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
