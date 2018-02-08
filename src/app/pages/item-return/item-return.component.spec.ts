import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReturnComponent } from './item-return.component';

describe('ItemReturnComponent', () => {
  let component: ItemReturnComponent;
  let fixture: ComponentFixture<ItemReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
