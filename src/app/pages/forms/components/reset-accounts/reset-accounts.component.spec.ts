import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAccountsComponent } from './reset-accounts.component';

describe('ResetAccountsComponent', () => {
  let component: ResetAccountsComponent;
  let fixture: ComponentFixture<ResetAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
