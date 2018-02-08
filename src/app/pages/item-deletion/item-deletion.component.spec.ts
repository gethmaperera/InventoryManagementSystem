import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeletionComponent } from './item-deletion.component';

describe('ItemDeletionComponent', () => {
  let component: ItemDeletionComponent;
  let fixture: ComponentFixture<ItemDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
