import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnHistoriqueVoteComponent } from './un-historique-vote.component';

describe('UnHistoriqueVoteComponent', () => {
  let component: UnHistoriqueVoteComponent;
  let fixture: ComponentFixture<UnHistoriqueVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnHistoriqueVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnHistoriqueVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
