import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueClaComponent } from './un-collegue-cla.component';

describe('UnCollegueClaComponent', () => {
  let component: UnCollegueClaComponent;
  let fixture: ComponentFixture<UnCollegueClaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueClaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueClaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
