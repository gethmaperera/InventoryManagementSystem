import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNotificationComponent } from './set-notification.component';

describe('SetNotificationComponent', () => {
  let component: SetNotificationComponent;
  let fixture: ComponentFixture<SetNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

