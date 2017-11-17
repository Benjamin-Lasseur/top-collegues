import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueTabComponent } from './un-collegue-tab.component';

describe('UnCollegueTabComponent', () => {
  let component: UnCollegueTabComponent;
  let fixture: ComponentFixture<UnCollegueTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
