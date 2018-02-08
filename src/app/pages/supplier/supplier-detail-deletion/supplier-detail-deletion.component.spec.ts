import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailDeletionComponent } from './supplier-detail-deletion.component';

describe('SupplierDetailDeletionComponent', () => {
  let component: SupplierDetailDeletionComponent;
  let fixture: ComponentFixture<SupplierDetailDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDetailDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDetailDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
