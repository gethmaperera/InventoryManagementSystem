import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLongtermNotificationComponent } from './set-longterm-notification.component';

describe('SetLongtermNotificationComponent', () => {
  let component: SetLongtermNotificationComponent;
  let fixture: ComponentFixture<SetLongtermNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLongtermNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLongtermNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
