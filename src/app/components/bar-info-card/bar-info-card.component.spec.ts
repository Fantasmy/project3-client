import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInfoCardComponent } from './bar-info-card.component';

describe('BarInfoCardComponent', () => {
  let component: BarInfoCardComponent;
  let fixture: ComponentFixture<BarInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
