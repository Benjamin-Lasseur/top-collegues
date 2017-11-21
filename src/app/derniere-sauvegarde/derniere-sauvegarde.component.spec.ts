import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerniereSauvegardeComponent } from './derniere-sauvegarde.component';

describe('DerniereSauvegardeComponent', () => {
  let component: DerniereSauvegardeComponent;
  let fixture: ComponentFixture<DerniereSauvegardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerniereSauvegardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerniereSauvegardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
