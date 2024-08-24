import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTableComponent } from './http-table.component';

describe('HttpTableComponent', () => {
  let component: HttpTableComponent;
  let fixture: ComponentFixture<HttpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
