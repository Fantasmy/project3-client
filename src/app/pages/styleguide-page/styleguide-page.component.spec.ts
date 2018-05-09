import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguidePageComponent } from './styleguide-page.component';

describe('StyleguidePageComponent', () => {
  let component: StyleguidePageComponent;
  let fixture: ComponentFixture<StyleguidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleguidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
