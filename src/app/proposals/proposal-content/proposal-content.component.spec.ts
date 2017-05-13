import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalContentComponent } from './proposal-content.component';

describe('ProposalContentComponent', () => {
  let component: ProposalContentComponent;
  let fixture: ComponentFixture<ProposalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
