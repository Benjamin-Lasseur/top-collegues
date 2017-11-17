import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueCarComponent } from './un-collegue-car.component';

describe('UnCollegueCarComponent', () => {
  let component: UnCollegueCarComponent;
  let fixture: ComponentFixture<UnCollegueCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
