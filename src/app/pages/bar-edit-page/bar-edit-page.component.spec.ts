import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEditPageComponent } from './bar-edit-page.component';

describe('BarEditPageComponent', () => {
  let component: BarEditPageComponent;
  let fixture: ComponentFixture<BarEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
