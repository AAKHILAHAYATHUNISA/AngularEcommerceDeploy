import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCrudComponent } from './http-crud.component';

describe('HttpCrudComponent', () => {
  let component: HttpCrudComponent;
  let fixture: ComponentFixture<HttpCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
