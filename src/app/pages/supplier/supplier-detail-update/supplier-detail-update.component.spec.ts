import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailUpdateComponent } from './supplier-detail-update.component';

describe('SupplierDetailUpdateComponent', () => {
  let component: SupplierDetailUpdateComponent;
  let fixture: ComponentFixture<SupplierDetailUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDetailUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
