import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDetailsPageComponent } from './bar-details-page.component';

describe('BarDetailsPageComponent', () => {
  let component: BarDetailsPageComponent;
  let fixture: ComponentFixture<BarDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
