import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDispalayComponent } from './product-dispalay.component';

describe('ProductDispalayComponent', () => {
  let component: ProductDispalayComponent;
  let fixture: ComponentFixture<ProductDispalayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDispalayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDispalayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
