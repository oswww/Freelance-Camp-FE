import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit, OnDestroy {
  proposals: Proposal[];
  errorMessage: string;
  subscription: Subscription;

  constructor(
    private proposalService: ProposalService,
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 30000);
    this.subscription = timer.subscribe(() => this.getProposal())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getProposal() {
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        );
  }
}
