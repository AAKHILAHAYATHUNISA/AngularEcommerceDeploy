import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgroupComponent } from './cardgroup.component';

describe('CardgroupComponent', () => {
  let component: CardgroupComponent;
  let fixture: ComponentFixture<CardgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
